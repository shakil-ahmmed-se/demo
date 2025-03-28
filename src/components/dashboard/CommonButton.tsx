// components/BillingHistoryButton.tsx
import React from 'react';
import Image from 'next/image';
import CardImage from "../../../public/dashboard/buttonImge.png"

// Define the props for the component (if needed)
interface BillingHistoryButtonProps {
  onClick?: () => void;
}

const BillingHistoryButton: React.FC<BillingHistoryButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-colors w-full my-10 "
    >
      
      <div className="mb-2">
        
        <Image
          src={CardImage} 
          alt="Billing Icon"
          width={64}
          height={64}
        />
      </div>
      <span className="text-white text-lg font-semibold">View Billing History</span>
      <div className="w-16 h-1 bg-white mt-1 rounded-full"></div>
    </button>
  );
};

export default BillingHistoryButton;