
import shieldCheck from "../../assets/ShieldCheck.png"
import AuditImage from "../../assets/AuditImage.png"
import { Button } from "../ui/button"

const Security = ()=>{

  return <>
          <div className="flex flex-col w-full gap-12">
             <div className="text-center">
              <h3 className="text-3xl font-bold">Serious Security</h3>
              <span className="text-sm font-semibold">Peace of mind by design</span>
             </div>

            <div className="space-y-6">
                  {/* first */}
                    <div className="flex sm:flex-row flex-col  p-4 border-b-3 border-b-[#002849] border-nav-border border-2 rounded-2xl">
              <img className="sm:w-[40%] w-[100%] h-[45vh] bg-cover rounded-2xl border" src={shieldCheck} alt="shild check image" />
              <div className="sm:w-[50%] w-[100%] sm:px-10 py-6 flex flex-col sm:gap-0 gap-4 justify-between">
                    <div>
                       <h2 className="text-2xl   font-bold border-b border-white pb-2 mb-2">Security</h2>
                       <p className="">Peace of mind supported by multiple audits by the world's leading security firms.</p>
                    </div>

                    <Button className={"border w-fit cursor-pointer border-white rounded-full px-6 text-sm font-bold btn"} variant="ghost">Learn More</Button>
              </div>
             </div>

             {/* second */}
               <div className="flex p-4 flex-col sm:flex-row border-b-3 border-b-[#002849] border-nav-border border-2 rounded-2xl">
              <div className="sm:w-[60%] w-full sm:px-10 py-6 flex flex-col justify-between sm:gap-0 gap-4">
                    <div>
                       <h2 className="text-2xl font-bold border-b border-white pb-2 mb-2">Audited by Internal</h2>
                       <p className="">Peace of mind supported by multiple audits by the world's leading security firms.</p>
                    </div>

                    <Button className={"border w-fit cursor-pointer border-white rounded-full px-6 text-sm font-bold btn"} variant="ghost">Learn More</Button>
              </div>

               <img className="sm:w-[40%] w-full h-[45vh] bg-cover rounded-2xl border " src={AuditImage} alt=" check image" />
             </div>
            </div>
           
             
          </div>
  </>
}

export {Security}