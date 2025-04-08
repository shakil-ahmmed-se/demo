// components/BillingHistoryButton.tsx
import React from 'react';
import Image from 'next/image';
import CardImage from "../../../public/dashboard/buttonImge.png";
import Link from 'next/link';

// Define the props for the component (if needed)
interface BillingHistoryButtonProps {
  onClick?: () => void;
}

const BillingHistoryButton: React.FC<BillingHistoryButtonProps> = () => {
  return (
    <div

      className="flex flex-col items-center justify-center p-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-colors w-full mb-8 cursor-pointer"
    >
      <div className="mb-4 flex items-center justify-center w-32 h-32 bg-gradient-to-b from-teal-500 to-teal-300 rounded-full">
        <Image
          src={CardImage}
          alt="Billing Icon"
          width={80}
          height={80}
        />
      </div>
      <Link href={'/billing'}>
      <button className="text-white text-xl font-semibold underline cursor-pointer">View Billing History</button>
      </Link>
      
    </div>
  );
};

export default BillingHistoryButton;