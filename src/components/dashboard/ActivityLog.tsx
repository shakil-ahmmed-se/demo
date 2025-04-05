// components/ActivityLog.tsx
import React from "react";

interface Activity {
  id: number;
  title: string;
  time: string;
}

const activities: Activity[] = [
  { id: 1, title: "Add New Client", time: "Today - 10:30 AM" },
  { id: 2, title: "Payment Receive for Project HR Management", time: "Today - 10:30 AM" },
];

const ActivityLog: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md bg-white w-full  h-full">
      <div className="flex justify-between items-center mb-3 ">
        <h2 className="text-lg font-semibold">Activity log</h2>
        <button className="bg-[#238DB2] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-500">
          View All
        </button>
      </div>
      <p className="text-gray-500 text-sm font-medium">Today</p>
      <div className="space-y-2 mt-2">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-gray-100 p-3 rounded-md shadow-sm">
            <p className="text-gray-800 font-medium">{activity.title}</p>
            <p className="text-gray-500 text-sm">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
