"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Billing {
  bankName: string,
  accountNumber: string,
  branch: string,
  routing: string,
  accountHolder: string,
  payment: string,
  date: string,

}

const billingData : Billing[] = [
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
  {
    bankName: "",
    accountNumber: "",
    branch: "",
    routing: "",
    accountHolder: "",
    payment: "",
    date: "",
  },
]

export default function BillingDetailsTable() {
  const [payments, setPayments] = useState(billingData);

  const totalAmount = 4500;
  const totalReceived = payments.reduce(
    (acc, cur) => acc + (parseFloat(cur.payment) || 0),
    0
  );
  const totalDue = totalAmount - totalReceived;


  const handleInputChange = (index: number, field: string, value: string) => {
  setPayments((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    )
  );
};

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
                onChange={(e) =>
                  handleInputChange(index, "bankName", e.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="accountHolder">Account Number</label>
              <Input
                placeholder="Enter Account Number"
                value={payment.accountNumber}
                onChange={(e) =>
                  handleInputChange(index, "accountNumber", e.target.value)
                }
              />
            </div>
            <div>
              <label >Branch</label>
              <Input
                placeholder="Enter Branch"
                value={payment.branch}
                onChange={(e) =>
                  handleInputChange(index, "branch", e.target.value)
                }
              />
            </div>
            <div>
              <label >Routing</label>
              <Input
                placeholder="Enter Routing Number"
                value={payment.routing}
                onChange={(e) =>
                  handleInputChange(index, "routing", e.target.value)
                }
              />
            </div>
            <div>
              <label > Account Hodler</label>
              <Input
                type="text"
                placeholder="Enter Account Holder"
                value={payment.accountHolder}
                onChange={(e) =>
                  handleInputChange(index, "accountHolder", e.target.value)
                }
              />
            </div>
            <div className="flex gap-2">
              <div>
              <label htmlFor="payment">Payment</label>
              <Input
                placeholder="Paid Amount"
                value={payment.payment}
                onChange={(e) =>
                  handleInputChange(index, "payment", e.target.value)
                }
              />
              </div>
             <div>
             <label htmlFor="Date">Date</label>
              <Input
                placeholder="Receive Date"
                value={payment.date}
                onChange={(e) =>
                  handleInputChange(index, "date", e.target.value)
                }
              />
             </div>
            </div>
          </div>
        </Card>
      ))}

      <div className="flex justify-between items-center">
        <div className="flex gap-4 mb-6">
          <Button className="bg-[#238DB2]">Done</Button>
          <Button variant="outline">Cancel</Button>
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
    </div>
  );
}
