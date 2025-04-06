import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FiEdit } from "react-icons/fi";

interface MilestoneData {
  title: string;
  progress: number;
  containPercent: number;
  viewTasksLink?: string;
}

const milestones: MilestoneData[] = [
  { title: "Design UI", progress: 62, containPercent: 20 },
  { title: "Frontend Development", progress: 74, containPercent: 20 },
  { title: "Backend Development", progress: 33, containPercent: 40 },
  { title: "Backend Development", progress: 43, containPercent: 10 },
  { title: "Testing", progress: 53, containPercent: 10 },
];

const MileStoneBar: React.FC = () => {
  const COLORS = ["#3498db", "#ecf0f1"];

  return (
    <div className="flex flex-col items-center w-full mt-10">
      <h2 className="text-xl font-bold mb-4 ">MILESTONE</h2>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {milestones.map((milestone, index) => {
          const chartData = [
            { name: "Completed", value: milestone.progress },
            { name: "Remaining", value: 100 - milestone.progress },
          ];

          return (
            <Card
              key={index}
              className="w-56 z-20 relative h-auto bg-white shadow-md border border-[#A6E7FF] rounded-lg overflow-hidden"
            >
              <CardHeader className="p-3 pb-0">
                <div className="flex justify-between text-center items-center w-full gap-3 ">
                  <CardTitle className="text-sm text-center font-medium">
                    {milestone.title}
                  </CardTitle>
                  <a
                    href={milestone.viewTasksLink || "#"}
                    className="text-xs text-gray-500"
                  >
                    <FiEdit size={16} />
                  </a>
                </div>
              </CardHeader>
              <CardContent className=" flex flex-col justify-center text-center items-center p-3 pt-0 bottom-0">
                <div className="w-24 h-24 relative my-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        strokeWidth={0}
                      >
                        {chartData.map((entry, i) => (
                          <Cell
                            key={`cell-${i}`}
                            fill={COLORS[i % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">
                      {milestone.progress}%
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <a
                    href={milestone.viewTasksLink || "#"}
                    className="text-xs text-[#238DB2] mb-2"
                  >
                    View tasks
                  </a>
                </div>

                {/* <div className="bg-blue-100 absolute text-[#238DB2] text-xs px-3 py-2 rounded-full text-center w-10/12">
                    Contain : {milestone.containPercent}%
                  </div> */}
              </CardContent>

              <div className="bg-[#B1EFFF] text-black absolute -bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-xs px-3 py-2 rounded-full text-center w-10/12 shadow">
                Contain : {milestone.containPercent}%
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MileStoneBar;
