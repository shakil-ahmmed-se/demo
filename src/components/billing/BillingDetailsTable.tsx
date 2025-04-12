"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Billing {
  bankName: string;
  accountNumber: string;
  branch: string;
  routing: string;
  accountHolder: string;
  payment: string;
  date: string;
}

const billingData: Billing[] = [
  {
    bankName: "Wells Fargo",
    accountNumber: "123456789012",
    branch: "Downtown LA",
    routing: "021000021",
    accountHolder: "Denial Mark",
    payment: "1000.00",
    date: "12-01-24",
  },
  {
    bankName: "Wells Fargo",
    accountNumber: "123456789012",
    branch: "Downtown LA",
    routing: "021000021",
    accountHolder: "Denial Mark",
    payment: "500.00",
    date: "12-06-24",
  },
  
];

export default function BillingDetailsTable() {
  const [payments, setPayments] = useState(billingData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPayment, setNewPayment] = useState({
    bankName: "",
    accountNumber: "",
    branch: "",
    routing: "",
    accountHolder: "",
    payment: "",
    date: "",
  });

  const totalAmount = 4500;
  const totalReceived = payments.reduce(
    (acc, cur) => acc + (parseFloat(cur.payment) || 0),
    0
  );
  const totalDue = totalAmount - totalReceived;



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayments((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNewPayment = () => {};

  return (
    <div className="mx-9 px-7 py-8 shadow-2xl rounded-3xl mb-10 bg-white mt-10">
      <h3 className="text-2xl font-bold mb-4">Payment Details</h3>

      {payments.map((payment, index) => (
        <Card key={index} className="mb-4 p-4 shadow-sm">
          <div className="grid grid-cols-6 gap-4">
            <div>
              <label className="">Bank Name</label>
              <Input
                placeholder="Enter Bank Name"
                value={payment.bankName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="accountHolder">Account Number</label>
              <Input
                placeholder="Enter Account Number"
                value={payment.accountNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Branch</label>
              <Input
                placeholder="Enter Branch"
                value={payment.branch}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Routing</label>
              <Input
                placeholder="Enter Routing Number"
                value={payment.routing}
                onChange={handleChange}
              />
            </div>
            <div>
              <label> Account Hodler</label>
              <Input
                type="text"
                placeholder="Enter Account Holder"
                value={payment.accountHolder}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-2">
              <div>
                <label htmlFor="payment">Payment</label>
                <Input
                  placeholder="Paid Amount"
                  value={payment.payment}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Date">Date</label>
                <Input
                  placeholder="Receive Date"
                  value={payment.date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}

      {isModalOpen && (
        <div className="fixed  inset-0 bg-black/50 flex items-center w-full justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-8/12">
            <h2 className="text-lg font-bold">Add New Payment</h2>
            <div className="grid grid-cols-2 gap-x-5  space-y-4 mt-4">
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Bank Name"
                value={newPayment.bankName}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Account Number"
                value={newPayment.accountNumber}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Branch"
                value={newPayment.branch}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Routing Number"
                value={newPayment.routing}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Account Holder"
                value={newPayment.accountHolder}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Paid Amount"
                value={newPayment.payment}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Receive Date"
                type="date"
                value={newPayment.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border cursor-pointer rounded"
              >
                Cancel
              </button>
              <button
                onClick={addNewPayment}
                className="px-10 cursor-pointer py-2 bg-[#238DB2] text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#238DB2] cursor-pointer"
          >
            Add Payment
          </Button>
        </div>

        <div className="w-1/3 rounded-3xl shadow bg-blue-50 text-sm">
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between font-medium">
              <span>Total Amount</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total Received</span>
              <span>${totalReceived.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-white bg-[#238DB2] p-2 rounded">
              <span>Total Due</span>
              <span>${totalDue.toFixed(2)}</span>
            </div>
          </CardContent>
        </div>
      </div>

      {isModalOpen && <div></div>}
    </div>
  );
}
