import { teamData } from "@/data/data"

const Teams = ()=>{
  return (
     <div className="flex flex-col w-[80%] gap-12 mx-auto">
                          <div className="text-center">
                           <h3 className="text-3xl font-bold">Team</h3>
                           <span className="text-sm font-semibold">Meet our fabulous team who makes dreams come true</span>
                          </div>
             
                        
                          <div className="grid sm:grid-cols-3 grid-cols-1  sm:gap-5 gap-8 place-items-center">

                            {
                              teamData.map((item,ind)=>{
                                return (
                                     <div className="sm:w-56 w-44 flex flex-col  items-center cursor-pointer relative -z-20" key={`team-member-${ind+1}`}>
                                   <img  className='sm:w-48 w-40 items-center z-40' src={item.image} alt={`team-member-${ind+1}`} />
                                   <div className="shadow-team-box  absolute h-1 w-1 rounded-full left-12 top-3"></div>

                                   <div className="text-center ">
                                    <h4 className="text-nav-border font-semibold sm:text-xl text-lg ">{item.first} <span className="text-white">{item.last}</span></h4>
                                    <p className="-mt-1">{item.head}</p>

                                   

                                   </div>
                                    <p className="mt-4  border-r-2 border-l-2 sm:px-1 px-2 text-sm  border-nav-border w-48 text-center">{item.subHead}</p>
                             </div>
                                )
                              })
                            }
                             
                            
                          </div>
                        
                       
                        
                          
                       </div>
  )
}

export {Teams}