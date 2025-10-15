import { Dot, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const STATUS = {
  ERROR: "error",
  LOADING: "loading",
  SUCCESS: "success",
};
const LatestUpdate = () => {
  const [emailInput, setEmailInput] = useState("");
  const [status, setStatus] = useState(STATUS.SUCCESS);
  const [waitListCount, setWaitListCount] = useState(0);

  const emailValidator = (email) => {
    if (!email || email.trim() === "") {
      toast.error("Please enter your email.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);

    if (!emailValidator(emailInput)) {
      setStatus(STATUS.ERROR);
      return;
    }

    try {
      //------------------------for running locally , use this URL ------------------------------------------
      
      // const response = await fetch("http://localhost:8080/api/waitlist", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: emailInput }),
      // });

      //-------------------------------------------------------------------------------------------
      const response = await fetch("https://blazpay-internship-assignment-cvjz.vercel.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput }),
      });

      if (!response.ok) {
        setStatus(STATUS.ERROR);
        const errData = await response.json();
        toast.error(errData.message || "Failed to join waitlist");
        return;
      }

      setStatus(STATUS.SUCCESS);
      setEmailInput("");
      setWaitListCount((prev) => prev + 1);
      toast.success("Successfully joined the waitlist!");
    } catch (error) {
      setStatus(STATUS.ERROR);
      console.log("Error=>", error);
      toast.error("Something went wrong!");
    }
  };

  const fetchCount = async () => {
    try {
      //------------------------for running locally , use this URL ------------------------------------------
      // const response = await fetch("http://localhost:8080/api/waitlist/count"); 
      //-------------------------------------------------------------------------------------------
      const response = await fetch("https://blazpay-internship-assignment-cvjz.vercel.app");

      if (!response.ok) {
        console.log("Internal Server error");
        return;
      }

      const data = await response.json();
      setWaitListCount(data.count);
    } catch (error) {
      console.error("Error fetching waitlist count:", error);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="h-[75vh] w-full overflow-hidden rounded-2xl border relative flex justify-center items-center  ">
      <div className="grid-background absolute -z-30"> </div>
      <div className="  w-[65%]  rounded-2xl left-1/2 -translate-x-1/2  -translate-y-32 mx-auto h-32 bottom-shadow-box absolute top-0"></div>

      <div className=" z-50 flex flex-col items-center gap-6 min-w-60">
        <h3 className="sm:text-4xl text-3xl font-semibold mb-4">Latest Updates</h3>

        <form className="flex w-full items-center sm:gap-1 gap-2 sm:flex-row flex-col" onSubmit={onSubmitHandler}>
          <Input
            className={`sm:w-60 w-[90vw] border ${
              status === STATUS.ERROR ? " border-red-600" : "border-blue-600"
            }`}
            value={emailInput}
            placeholder="Your Email"
            onChange={(e) => {
              setEmailInput(e.target.value);
              setStatus(STATUS.SUCCESS);
            }}
          />
          <Button className={"cursor-pointer w-[90vw] sm:w-fit "}>
            {status === STATUS.LOADING ? (
              <>
                <Loader2 className="animate-spin" /> Joining...
              </>
            ) : (
              <>Join Waitlist</>
            )}
          </Button>
        </form>

        {/* <p className="bg-muted/85 sm:px-4 px-2 py-2 rounded-lg border-white text-sm border text-center">
          <span className="font-semibold text-green-600">{waitListCount}</span>{" "}
          users are already waiting — reserve your spot now!
        </p> */}
        <p className="bg-muted/85 sm:px-4 px-3 py-2 rounded-lg border-white text-sm border text-center w-[90%] sm:w-auto mx-auto leading-relaxed">
  <span className="font-semibold text-green-600">{waitListCount}</span>{" "}
  users are already waiting — reserve your spot now!
</p>

        <div className="text-ring flex items-center text-xs sm:text-sm">
          <p>No credit card required</p> <Dot /> <p>7-days free trial</p>
        </div>
      </div>
     
    </div>
  );
};

export { LatestUpdate };
