'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';

export default function Settings() {
  return (
    <div className="flex items-center bg-gray-50 p-4">
      <div className="bg-white shadow rounded-lg p-6 w-full drop-shadow-2xl">
        <h2 className="text-lg font-semibold mb-6">Notification Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* bill  */}
          <div>
            <p className="font-medium">1. Billing Notification</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-x-2
              ">
                <Switch checked className="data-[state=checked]:bg-[#238DB2]"  />
                <span>By Email</span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <Switch className="data-[state=checked]:bg-[#238DB2]" />
                <span>By Web</span>
              </div>
            </div>
          </div>

          {/*  mile  */}
          <div>
            <p className="font-medium">2. Milestone Notification</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-x-2">
                <Switch checked className="data-[state=checked]:bg-[#238DB2]"  />
                <span>By Email</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Switch className="data-[state=checked]:bg-[#238DB2]" />
                <span>By Web</span>
              </div>
            </div>
          </div>

          {/* Projects  */}
          <div>
            <p className="font-medium">3. Project Notification</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-x-2 ">
                <Switch checked className="data-[state=checked]:bg-[#238DB2]"  />
                <span>By Email</span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <Switch className="data-[state=checked]:bg-[#238DB2]" />
                <span>By Web</span>
              </div>
            </div>
          </div>

          {/* Ticket */}
          <div>
            <p className="font-medium">4. Ticket Notification</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-x-2 ">
                <Switch   className="data-[state=checked]:bg-[#238DB2]"   />
                <span>By Email</span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <Switch className="data-[state=checked]:bg-[#238DB2]" />
                <span>By Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
