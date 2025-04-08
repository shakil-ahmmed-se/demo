import Link from 'next/link';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

interface Project {
  name: string;
  progress: number;
  paymentAmount?: string;
}

interface PaymentDetailsProps {
  projects: Project[];
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ projects }) => {

  const transformDataForChart = (progress: number) => [
    { name: 'progress', value: progress, fill: '#238DB2' },
    { name: 'remaining', value: 100 - progress, fill: '#E5E7EB' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="flex justify-center flex-col items-center p-3 border rounded-md h-64">
          <h3 className="text-base font-medium text-gray-700 mb-1">{project.name}</h3>
          <div className="relative w-36 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                barSize={20}
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
            {project.paymentAmount && (
              <div
                className="absolute bg-[#238DB2] text-white text-xs font-medium px-2 py-1 rounded-full"
                style={{
                  left: '50%',
                  top: '-10px',
                  transform: 'translateX(-50%)',
                }}
              >
                {project.paymentAmount}
              </div>
            )}
          </div>
          <Link href={'/projects'}>
          <button className="mt-2 text-[#238DB2] hover:underline text-sm cursor-pointer">View Details</button>
          </Link>
        </div>
      ))}
      <div className="relative flex flex-col items-center justify-center p-4 bg-[#238DB2] rounded-md text-white overflow-hidden">
        <Link href={'/billing'}>
        <button className="text-lg font-medium cursor-pointer underline">View All Payments</button>
        </Link>
        <div className="absolute bottom-[-90px] right-[-80px] w-48 h-48 rounded-full transition duration-200 bg-gradient-to-b from-[#BBE3F2] to-[#238DB2] "></div>
      </div>
    </div>
  );
};

export default PaymentDetails;