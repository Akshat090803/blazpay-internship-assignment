
import PresaleBanner from "../../assets/presaleBanner.png"
import { Button } from '../ui/button'
const Presale = ()=>{

  return <>
        
        <div  className="h-[75vh] border-nav-border border-2 rounded-2xl min-w-full bg-cover bg-center py-10 relative border-b-3 border-b-[#002849]" 
        style={{backgroundImage:`url(${PresaleBanner})`}}>

            <div className="flex flex-col sm:w-lg   h-full sm:pl-12 justify-between">
         <div >
           <h2 className="sm:text-[3rem] text-2xl font-bold gradient-text mb-2 text-center sm:text-left">Join The Future of Crypto with this Presale</h2>

         </div>

         <div className="sm:gap-4 flex flex-col gap-2 mx-auto sm:flex-row sm:mx-0">
          <Button variant="ghost"  className={"rounded-full  cursor-pointer text-xs font-bold px-6 gradient-btn w-32 btn"}>Join the PreSale</Button>
          <Button variant="ghost" className={"rounded-full  cursor-pointer text-xs font-bold px-6 bg-btn-color hover:bg-none w-32 btn"}>How to Join</Button>
         </div>
       </div>
        </div>
  </>
}



export {Presale}