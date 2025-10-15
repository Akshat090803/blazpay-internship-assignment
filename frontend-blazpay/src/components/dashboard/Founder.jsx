const Founder = ({founderData})=>{
   
  return (
      <div className="flex flex-col w-full gap-12">
             <div className="text-center">
              <h3 className="text-3xl font-bold ">Keynote from the Founder</h3>
              
             </div>

              
                   <div className="flex p-4 sm:flex-row flex-col gap-2  rounded-2xl sm:gap-14">
              <div className="sm:w-[40%] w-full relative ">
                <img className="  bg-cover rounded-2xl border " src={founderData.image} alt="founder image" />
                <div className="absolute bottom-6 left-6 px-2 border-l-2 border-orange-500">
                    <h4 className="text-sm -mb-1">Founder</h4>
                    <p className="font-semibold text-lg">{founderData.name}</p>
                </div>
                
              </div>
              <div className="sm:w-[60%] w-full line-clamp-7 sm:px-10 ">
                    <div>
                     
                       <p className="text-center sm:text-left">{founderData.bio}</p>
                    </div>

                   
              </div>
             </div>
           
             
          </div>
  )
}


export {Founder}