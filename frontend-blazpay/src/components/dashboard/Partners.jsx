const Partners = ({images ,heading, small=false})=>{

  return (
    <div className="">
          <h3 className={`font-bold text-center ${small ? 'text-lg':'text-3xl'} mb-12`}>
                {heading}
          </h3>
             
             <div className="flex w-full items-center justify-between overflow-x-auto gap-2 sm:overflow-hidden">
                   {
                    images.map((imgSrc , ind)=>{
                      return <img className={`${ind==0 ? 'sm:h-10 h-8  ':'sm:h-7 h-4'}  btn   cursor-pointer `} src={imgSrc} alt={`partner-img-${ind+1}`} key={`partner-img-${ind+1}`}/>
                    })
                   }
             </div>

    </div>
  )
}

export {Partners}