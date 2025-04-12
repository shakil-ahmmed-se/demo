"use client"

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { month: "Jan", revenue: 2500 },
  { month: "Feb", revenue: 1500 },
  { month: "Mar", revenue: 2000 },
  { month: "Apr", revenue: 1800 },
  { month: "May", revenue: 2500 },
  { month: "Jun", revenue: 2700 },
  { month: "Jul", revenue: 2200 },
  { month: "Agu", revenue: 2600 },
  { month: "Sep", revenue: 1900 },
  { month: "Oct", revenue: 3000 },
  { month: "Nov", revenue: 1600 },
  { month: "Dec", revenue: 2500 },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { value: number }[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-blue-500 font-semibold border border-blue-300 rounded px-3 py-1 shadow-md">
        +${payload[0].value.toFixed(2)}
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined); 

  return (
    <div className="p-6 bg-white border rounded-lg shadow-md w-full mt-16">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: -10 }}>
          <XAxis dataKey="month" tick={{ fill: "#666" }} />
          <YAxis tick={{ fill: "#666" }} tickFormatter={(value) => `${value / 1000}k$`} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="revenue"
            radius={[30, 30, 30, 30]}
            onMouseOver={(data, index) => setActiveIndex(index)}
            onMouseOut={() => setActiveIndex(undefined)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === activeIndex ? "#238DB2" : "url(#hatch)"}
              />
            ))}
          </Bar>
          <defs>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#238DB2" strokeWidth="1" />
            </pattern>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
