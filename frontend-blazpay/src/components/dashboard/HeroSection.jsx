import React from "react";
import { Header } from "./Header";
import herobanner from "../../assets/hero-banner.png";
import { Button } from "../ui/button";
import { techData } from "@/data/data";
import { TimeBlock } from "./TImeBlock";

const HeroSection = ({ timeLeftPhase1 }) => {
  return (
    <>
      <Header />

      <div
        className="h-[75vh] border-nav-border border-2 rounded-2xl  min-w-full bg-contain sm:bg-cover bg-center py-10 relative"
        style={{ backgroundImage: `url(${herobanner})` }}
      >
        <div className="flex flex-col sm:w-lg   h-full  sm:pl-12 justify-between">
          <div>
            <h2 className="sm:text-[3rem] text-2xl font-bold gradient-text mb-2 text-center sm:text-left">
              Pre-Sale is Live, participate with
            </h2>

            <div className="flex gap-3 items-center justify-center sm:justify-start ">
              {techData.map((imgsrc, ind) => {
                return (
                  <img
                    src={imgsrc}
                    alt={`img-tech-${ind + 1}`}
                    key={`img-tech-${ind + 1}`}
                    className={`${
                      ind == 0 ? "sm:h-16 h-10  " : " h-6 w-6 sm:h-10 sm:w-10"
                    }  duration-300  cursor-pointer btn`}
                  />
                );
              })}
            </div>
          </div>

          <div className="sm:gap-4 flex flex-col gap-2 mx-auto sm:flex-row sm:mx-0">
            <Button
              variant="ghost"
              className={
                "rounded-full  cursor-pointer text-xs font-bold px-6 btn gradient-btn w-32"
              }
            >
              Buy Now
            </Button>
            <Button
              variant="ghost"
              className={
                "rounded-full  cursor-pointer text-xs font-bold px-6 bg-btn-color hover:bg-none w-32 btn"
              }
            >
              Join Whitelist
            </Button>
          </div>
        </div>

        {/* timer block */}
        <div
          className=" absolute 
    top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 
    sm:top-auto sm:left-auto sm:bottom-4 sm:right-10 
    sm:translate-x-0 sm:translate-y-0 mt-1 sm:mt-0   "
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-4 animate-pulse">
              {/* for days */}
              <div className="flex flex-col items-center ">
                <TimeBlock value={timeLeftPhase1.days} />
                <span className="text-xl font-semibold text-gray-400">D</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <TimeBlock value={timeLeftPhase1.hours} />
                <span className="text-xl font-semibold text-gray-400">H</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <TimeBlock value={timeLeftPhase1.minutes} />
                <span className="text-xl font-semibold text-gray-400">M</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <TimeBlock value={timeLeftPhase1.seconds} />
                <span className="text-xl font-semibold text-gray-400">S</span>
              </div>
            </div>

            <p className="sm:text-2xl text-lg text-white font-bold">
              Phase 1 Ends In
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { HeroSection };
