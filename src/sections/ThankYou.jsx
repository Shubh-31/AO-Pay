"use client";

import React, { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import AppConfig from "@/config";
import { Button } from "@/components/ui/button";

const ThankYou = ({
  CustomerName,
  CustomerMobileNo,
  customerEmailID,
  customerRemarks,
}) => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const querySubmission = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${AppConfig.querySubmissionBaseURL}/api/CrmQuery/Crmleadenquiry`,
        {
          firstName: CustomerName,
          lastName: "N/A",
          phoneNumber: CustomerMobileNo,
          companyName: "N/A",
          emailAddress: customerEmailID,
          leadSource: "N/A",
          leadStatus: "N/A",
          remarks: customerRemarks,
          activeYN: "N/A",
          createBy: "N/A",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const apiStatus = response.data.status; 
      setStatus(apiStatus);
      setMessage(
        `Your request has been received. We will contact you shortly. Thank you for choosing us.`
      );

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      setStatus(false);
      setMessage("You have already submitted your query.");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg p-5 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2">
        <CheckCircle className="text-green-500 w-5 h-5" />
        <h2 className="font-medium text-green-700">OTP Verified</h2>
      </div>
      <p className="text-sm text-gray-600 mt-2">{message}</p>
      <div className="flex justify-end mt-4">
        <Button
          type="button"
          onClick={querySubmission}
          disabled={isSubmitting}
          className={`px-4 py-1.5 text-sm rounded-md transition ${
            isSubmitting
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
