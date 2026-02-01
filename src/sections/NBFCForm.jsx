"use client";

import { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import AppConfig from "@/config";
import countryCodes from "@/app/data/countrycodes.json";
import OtpPopUp from "@/OTPPopUp";

export default function NBFCForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      countryCode: "+91",
    },
  });

  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [optimisticStatus, setOptimisticStatus] = useState(null); // "sending" | "success" | "error"

  const countryCode = watch("countryCode");
  const phone = watch("phone");

  const sendOtpMutation = useMutation({
    mutationFn: async (payload) => {
      const headers = { "Content-Type": "application/json" };
      const { data } = await axios.post(
        `${AppConfig.contactUsBaseURL}/AOPCustomerQuery/SendOTP`,
        payload,
        { headers }
      );
      return data;
    },
    onMutate: async () => {
      setResponseMessage("");
      setOptimisticStatus("sending");
    },
    onSuccess: async (data) => {
      const returnMessage = data?.returnMessage;
      const status = data?.status;

      if (
        status === false &&
        returnMessage ===
          "OTP could not be sent because a user record already exists."
      ) {
        setOptimisticStatus("error");
        setResponseMessage(returnMessage);
      } else if (status === true && returnMessage === "OTP Send Successfully") {
        setOptimisticStatus("success");
        setResponseMessage("OTP sent successfully!");
        // show success feedback before popup
        setTimeout(() => {
          setShowOtpPopup(true);
          setOptimisticStatus(null);
          setResponseMessage("");
        }, 800);
      } else {
        setOptimisticStatus("error");
        setResponseMessage(returnMessage || "Unexpected server response.");
      }
    },
    onError: (err) => {
      console.error("Error sending OTP:", err);
      setOptimisticStatus("error");
      setResponseMessage("Failed to send OTP. Please try again.");
    },
  });

  const onSubmit = (formValues) => {
    const payload = {
      customerName: formValues.name,
      customerMobileNo: `${formValues.countryCode}${formValues.phone}`,
      customerEmailID: formValues.email,
      customerRemarks: formValues.message,
    };
    sendOtpMutation.mutate(payload);
  };

  const handlePhoneInput = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10);
    setValue("phone", onlyNums, { shouldValidate: true });
  };

  const isDisabled =
    sendOtpMutation.isPending || optimisticStatus === "sending";

  return (
    <div className="max-w-lg mx-auto py-10 text-center">
    

      <form onSubmit={handleSubmit(onSubmit)} className="px-4 mt-8">
        <div className="mb-4">
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            disabled={isDisabled}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="Enter your business email"
            disabled={isDisabled}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone + Country Code */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4">
          <Controller
            name="countryCode"
            control={control}
            render={({ field }) => (
              <Select {...field} disabled={isDisabled}>
                <option value="">Select Country Code</option>
                {countryCodes.map((c, i) => (
                  <option key={i} value={c.code}>
                    {c.country} ({c.code})
                  </option>
                ))}
              </Select>
            )}
          />

          <Input
            type="tel"
            {...register("phone", {
              required: "Phone is required",
              minLength: { value: 7, message: "Enter valid phone number" },
              maxLength: { value: 10, message: "Max 10 digits" },
            })}
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneInput}
            disabled={isDisabled}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm mb-4">{errors.phone.message}</p>
        )}

        <div className="mb-4">
          <Textarea
            {...register("message")}
            placeholder="Enter your company details"
            rows={4}
            disabled={isDisabled}
          />
        </div>

        <Button
          type="submit"
          className="w-full py-2 mt-2"
          disabled={isDisabled}
        >
          {optimisticStatus === "sending"
            ? "Sending OTP..."
            : optimisticStatus === "success"
            ? "Success!"
            : "Submit Now"}
        </Button>

        {responseMessage && (
          <p
            className={`mt-4 text-sm ${
              optimisticStatus === "error"
                ? "text-red-500"
                : "text-green-600 font-medium"
            }`}
          >
            {responseMessage}
          </p>
        )}
      </form>

      {/* OTP popup */}
      {showOtpPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
          <OtpPopUp
            CustomerName={watch("name")}
            CustomerMobileNo={`${countryCode}${phone}`}
            customerEmailID={watch("email")}
            customerRemarks={watch("message") || ""}
          />
        </div>
      )}
    </div>
  );
}
