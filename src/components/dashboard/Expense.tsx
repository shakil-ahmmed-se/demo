"use client";

import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Salaries", value: 40, color: "#FF6B45" },
  { name: "Vendor", value: 15, color: "#7BC96F" },
  { name: "Payments", value: 45, color: "#43B0F1" },
];

const ExpenseChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("M"); // 'M' for Monthly, 'Y' for Yearly

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md bg-white w-full max-w-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Expense</h2>
        <div className="flex space-x-1">
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              selectedPeriod === "M" ? "bg-[#238DB2] text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setSelectedPeriod("M")}
          >
            M
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              selectedPeriod === "Y" ? "bg-[#238DB2] text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setSelectedPeriod("Y")}
          >
            Y
          </button>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="flex flex-col items-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
            stroke="white"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-3 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseChart;
