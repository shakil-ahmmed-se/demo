import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const ProgressBar = () => {
  const targetvalue = 37; 
  const [value , setValue ] = useState(0);

   useEffect(()=> {
    const timeout = setTimeout(() => {
        setValue(targetvalue);
    }, 300);
    return () => clearTimeout(timeout)
   },[targetvalue])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 border-b-2 border-[#BBBBBB] w-2/12 mx-auto">PROGRESS</h2>
     
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative w-full h-10 bg-purple-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#4C2078] text-white text-sm font-semibold flex items-center justify-center rounded-full transition-all duration-300"
            style={{ width: `${value}%` }}
          >
            {value}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
