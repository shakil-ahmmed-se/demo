import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

interface Project {
  name: string;
  progress: number;
  paymentAmount?: string;
}

interface ProjectDetailsProps {
  projects: Project[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects }) => {
  // Transform project data for Recharts
  const transformDataForChart = (progress: number) => [
    { name: 'progress', value: progress, fill: '#238DB2' },
    { name: 'remaining', value: 100 - progress, fill: '#E5E7EB' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col justify-center items-center p-3 border rounded-md h-64">
          <h3 className="text-base font-medium text-gray-700 mb-1">{project.name}</h3>
          <div className="relative w-24 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                barSize={10}
                data={transformDataForChart(project.progress)}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-800">{project.progress}%</span>
            </div>
          </div>
          <button className="mt-2 text-blue-500 hover:underline text-sm">View Details</button>
        </div>
      ))}
      <div className="relative flex flex-col items-center justify-center p-4 bg-[#238DB2] rounded-md text-white overflow-hidden">
        <button className="text-lg font-medium">View All Payments</button>
        <div className="absolute bottom-[-90px] right-[-80px] w-48 h-48 rounded-full transition duration-200 bg-gradient-to-b from-[#BBE3F2] to-[#238DB2] "></div>
      </div>
    </div>
  );
};

export default ProjectDetails;