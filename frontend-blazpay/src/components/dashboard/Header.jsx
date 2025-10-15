
import bazplaylogo from "../../assets/bazplay-logo.png";

import { Button } from "../ui/button";
const Header = () => {
  return (
    <>
      <header className=" hidden sm:flex items-center w-full justify-between">
        <div>
          <img src={bazplaylogo} className="h-6 w-fit" alt="bazplay-logo" />
        </div>

        <nav className="px-4 py-2 rounded-full border border-nav-border flex items-center gap-3 text-sm text-[#FFFFFF] font-semibold">
          <span className="nav-hover cursor-pointer transition-all duration-150">Home</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">About</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">EntryPass</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">Utility Key</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">Blog</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">Whitepaper</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">Defi</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">Join Presale</span>
        </nav>

        <Button variant="ghost" className={'rounded-full border border-b-nav-border border-r-nav-border border-t-gray-800 headBtn transition-all  border-l-gray-800 cursor-pointer text-xs font-bold px-6'}>Buy Now</Button>
      </header>

{/* Mobile headeer */}
       <header className="sm:hidden items-center w-full space-y-2">

         <nav className="px-2 py-1 rounded-full border border-nav-border flex items-center justify-center gap-3 text-xs text-[#FFFFFF] font-semibold">
          <span className="nav-hover cursor-pointer transition-all duration-150">Home</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">About</span>
          <span className="nav-hover cursor-pointer transition-all duration-150">EntryPass</span>
          {/* <span className="nav-hover cursor-pointer transition-all duration-150">Utility Key</span> */}
          <span className="nav-hover cursor-pointer transition-all duration-150">Blog</span>
          {/* <span className="nav-hover cursor-pointer transition-all duration-150">Whitepaper</span> */}
          <span className="nav-hover cursor-pointer transition-all duration-150">Defi</span>
          {/* <span className="nav-hover cursor-pointer transition-all duration-150">Join Presale</span> */}
        </nav>
        

       <div className="flex justify-between items-center">
        
          <div className="">
          <img src={bazplaylogo} className="h-6 w-fit" alt="bazplay-logo" />
        </div>
        <Button variant="ghost" className={'rounded-full border border-b-nav-border border-r-nav-border border-t-gray-800 headBtn transition-all  border-l-gray-800 cursor-pointer text-xs py-0 font-bold px-4'}>Buy Now</Button>
       </div>
      </header>
    </>
  );
};

export { Header };
