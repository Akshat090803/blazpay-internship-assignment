const TimeBlock = ({ value }) => {
  return (
    // relative parent
    <div className="relative p-2 sm:p-0 flex sm:h-12 sm:w-12 flex-col items-center justify-center rounded-lg bg-black">
      {/* Top-left corner*/}
      <span className="absolute left-0 top-0 h-4 w-4 rounded-tl-lg border-l-2 border-t-2 border-[#2989FA]"></span>
      
      {/* Top-right corner */}
      <span className="absolute right-0 top-0 h-4 w-4 rounded-tr-lg border-r-2 border-t-2 border-[#2989FA]"></span>
      
      {/* Bottom-left corner */}
      <span className="absolute bottom-0 left-0 h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-[#2989FA]"></span>
      
      {/* Bottom-right corner */}
      <span className="absolute bottom-0 right-0 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-[#2989FA]"></span>

      {/* timer value */}
      <span className="sm:text-2xl text-lg font-bold text-[#FE652B]">{value}</span>
    </div>
  );
};

export {TimeBlock}