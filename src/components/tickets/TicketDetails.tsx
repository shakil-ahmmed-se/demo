import Image from 'next/image';
import React from 'react';

const TicketDetails = () => {
    return (
        <div>
            <h3>Ticket issue </h3>
            <div>
                <p>Hi, I can’t seem to update the app. It says “Error checking updates” when I tried to update the app via Google Play. Pls help.</p>
                <Image src={'/tickets/issue.png'} alt="" width={500} height={400} />
            </div>
            
        </div>
    );
};

export default TicketDetails;