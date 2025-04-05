import { ArrowUpRight } from "lucide-react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const projectData = [
  { title: "Total Projects", count: 37 },
  { title: "Completed Projects", count: 25 },
  { title: "Running Project", count: 12 },
  { title: "Future Project", count: 5 },
];

export default function TopProjectCards() {
  return (

    // <div>
    //     <div className="flex justify-between">
    //         <div className="bg-red-500 w-1/4">div-1</div>
    //         <div className="bg-red-500 w-1/4">div-2</div>
    //         <div className="bg-red-500 w-1/4">div-3</div>
    //         <div className="bg-red-500 w-1/4">div-4</div>
    //     </div>
    // </div>
    <div className="flex gap-3  p-4 ">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="group relative flex flex-col justify-between p-4 w-1/4 h-42 bg-white hover:bg-[#238DB2] hover:text-white cursor-pointer rounded-xl shadow-md border border-[#A6E7FF] transition duration-200 group overflow-hidden"
        >
       
          <div className="flex justify-between items-center">
            <span className="text-gray-700 lg:md:text-base group-hover:text-white  text-sm font-medium  tracking-wide">
              {project.title}
            </span>
            <IoArrowForwardCircleOutline className="-rotate-45 group-hover:bg-white group-hover:text-[#238DB2] h-auto w-10 text-gray-500 transition duration-200 rounded-[50px] p-0" size={20} />
          </div>
          <div className="text-5xl font-bold text-gray-900 group-hover:text-white">
            {project.count}
          </div>

          
          <div className="absolute bottom-[-95px] right-[-85px] w-48 h-48 rounded-full transition duration-200 bg-gradient-to-b from-[#BBE3F2] to-[#238DB2]"></div>
        </div>
      ))}
    </div>
  );
}
