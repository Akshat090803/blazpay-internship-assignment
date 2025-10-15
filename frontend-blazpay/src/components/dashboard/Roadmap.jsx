import roadmapBg from "../../assets/roadmapBg.png"
const Roadmap = ({listingData})=>{
 
  return <>
          <div className="flex flex-col w-full gap-12 ">
             <div className="text-center">
              <h3 className="text-3xl font-bold">Roadmap</h3>
              <span className="text-sm font-semibold">Peace of mind by design</span>
             </div>

           
             
            <div>

                      <div className="flex sm:p-4 gap-4 sm:gap-0 sm:flex-row flex-col rounded-2xl">
             
             {/* left part flex */}
              <div className="sm:w-[50%] w-full min-h-[70vh] bg-cover bg-no-repeat rounded-2xl border border-nav-border  p-6 font-bold text-xl "
              style={{backgroundImage:`url(${roadmapBg})`}}>
                     
                     
                Blazpay Roadmap
              </div>

              {/* right part of flex */}
              <div className="flex-1 sm:px-12  flex flex-col gap-6 ">
                   
                    <div className="border space-y-4  border-t-white border-b-white rounded-2xl flex-1 p-4 shadow-inwards">
                      <h4 className="text-center sm:text-2xl text-xl font-bold">Listing Timeline</h4>

                      <div className="text-center">
                        <p className="sm:text-9xl text-4xl font-bold">{listingData.timeLine}</p>
                        <span className="text-sm">Months</span>
                      </div>
                         
                    </div>

                      <div className="border space-y-4  border-t-white border-b-white rounded-2xl flex-1 p-4 shadow-inwards">
                      <h4 className="text-center sm:text-2xl text-xl font-bold">Confirmed Listings</h4>

                      <div className="text-center">
                        <p className="sm:text-9xl text-4xl font-bold">{listingData.confirmed}</p>
                        <span className="text-sm">Listings</span>
                      </div>
                         
                    </div>
                   
              </div>
             </div>
                
                <p className=" hover:underline text-blue-700 text-sm text-center mt-2 font-semibold">Disclaimer <span className="text-ring">Listing T & C Applied</span></p>
            </div>
            
          
           
             
          </div>
  </>
}

export {Roadmap}