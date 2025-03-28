// components/BillingHistoryButton.tsx
import React from 'react';
import Image from 'next/image';
import CardImage from "../../../public/dashboard/buttonImge.png";

// Define the props for the component (if needed)
interface BillingHistoryButtonProps {
  onClick?: () => void;
}

const BillingHistoryButton: React.FC<BillingHistoryButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-colors w-full mb-8"
    >
      <div className="mb-4 flex items-center justify-center w-32 h-32 bg-gradient-to-b from-teal-500 to-teal-300 rounded-full">
        <Image
          src={CardImage}
          alt="Billing Icon"
          width={80}
          height={80}
        />
      </div>
      <span className="text-white text-xl font-semibold">View Billing History</span>
      <div className="w-20 h-0.5 bg-white mt-2 rounded-full"></div>
    </button>
  );
};

export default BillingHistoryButton;