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
    <div className="flex gap-3 mx-4 p-4">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="group relative flex flex-col justify-between p-4 w-1/4 h-32 bg-white hover:bg-[#2289a5] hover:text-white cursor-pointer rounded-xl shadow-md border border-blue-100 transition duration-200 group overflow-hidden"
        >
       
          <div className="flex justify-between items-center">
            <span className="text-gray-700 lg:md:text-base group-hover:text-white  text-sm font-medium  tracking-wide">
              {project.title}
            </span>
            <IoArrowForwardCircleOutline className="-rotate-45 group-hover:text-white h-10 w-10 text-gray-500 transition duration-200" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-900 group-hover:text-white">
            {project.count}
          </div>

          
          <div className="absolute bottom-[-30px] right-[-30px] w-20 h-20 rounded-full transition duration-200 group-hover:bg-blue-500 bg-gradient-to-br from-blue-200 to-blue-400"></div>
        </div>
      ))}
    </div>
  );
}
