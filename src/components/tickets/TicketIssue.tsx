import Image from "next/image";
import React from "react";

const TicketIssue = () => {
  return (
    <div className="mx-8 px-7 shadow-md rounded-md p-4 bg-white mt-10 drop-shadow-2xl">
      <h3 className="text-lg font-bold my-5">Ticket issue </h3>
      <div>
        <p>
          Hi, I can’t seem to update the app. It says “Error checking updates”
          when I tried to update the app via Google Play. Pls help.
        </p>
        <Image src={"/tickets/issue.png"} alt="" width={120} height={120} />
      </div>
    </div>
  );
};

export default TicketIssue;
