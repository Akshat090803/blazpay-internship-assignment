
import layer1 from "../../assets/Layer_1.png"
import layer2 from "../../assets/layer_2.png"
const Stats = ({statsData})=>{
console.log('das',statsData[0] , statsData[0].value)
if(!statsData) return;
  return (
     <div className="flex flex-col w-full gap-12 px-4">
             <div className="text-center">
              <h3 className="text-3xl font-bold">Stats</h3>
              <span className="text-sm font-semibold">Meet our fabulous team who makes dreams come true</span>
             </div>

            
            <div className="flex items-center sm:flex-row flex-col sm:gap-14 gap-7 sm:justify-center ">
              {/*first  */}
              <div className="sm:h-64 sm:w-64 h-52 w-52 bg-muted/85 rounded-full relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-10 sm:w-10 h-8 w-8 rounded-full bg-nav-border z-40"></div>
                   <img src={layer1} className="absolute top-0 left-0 h-full w-full z-10" alt="" />

                   <div  className="absolute top-14 right-4 text-xs sm:text-sm font-semibold">
                    <p>{statsData ? statsData[0].value : '1.2'}</p>
                    <p>{statsData[0].label}</p>
                   </div>
              </div>
              {/*second */}
              <div className="sm:h-64 sm:w-64 h-52 w-52 bg-muted/85 rounded-full relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-10 sm:w-10 w-8 h-8 rounded-full bg-nav-border z-40"></div>
                   <img src={layer2} className="absolute top-0 left-0 h-full  z-10" alt="" />

                   <div  className="absolute top-24 sm:right-4 right-0 text-xs sm:text-sm font-semibold">
                     <p>{statsData[1].value}</p>
                    <p>{statsData[1].label}</p>
                   </div>
              </div>
              {/*Third  */}
              <div className="sm:h-64 sm:w-64 h-52 w-52 bg-muted/85 rounded-full relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-10 sm:w-10 w-8 h-8 rounded-full bg-nav-border z-40"></div>
                   <img src={layer1} className="absolute top-0 left-0 h-full w-full z-10" alt="" />

                   <div className="absolute sm:top-14 sm:right-4  right-0 top-14 sm:text-sm text-xs  font-semibold">
                     <p>{statsData[2].value}</p>
                    <p>{statsData[2].label}</p>
                   </div>
              </div>
                
              
            </div>
            
         
             
          </div>
  )
}

export {Stats}