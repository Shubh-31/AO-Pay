"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AppConfig from "@/config";
import countryCodes from "@/app/data/countrycodes.json";
import BOSProducts from "@/app/data/BOSProducts.json";
import { Select } from "@/components/ui/select";
import OtpPopUp from "@/OTPPopUp";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+91");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      phone: onlyNums,
    }));
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        mobileNo: `${countryCode}${formData.phone}`,
        emailid: formData.email,
        message: `Service: ${service}\nCompany: ${formData.company}\nMessage: ${formData.message}`,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(
        `${AppConfig.contactUsBaseURL}/AOPCustomerQuery/SendOTP`,
        payload,
        { headers }
      );

      const returnMessage = data?.returnMessage;
      const status = data?.status;

      if (
        status === false &&
        returnMessage ===
          "OTP could not be sent because a user record already exists."
      ) {
        setResponseMessage(returnMessage);
      } else if (status === true && returnMessage === "OTP Send Successfully") {
        setShowOtpPopup(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10 text-center">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-gray-500 my-3">
        We’ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="px-4 mt-8">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
        </div>

        <div className="mb-4">
          <Input
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
            value={formData.company}
          />
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4">
          <Select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="">Select Country Code</option>
            {countryCodes.map((c, i) => (
              <option key={i} value={c.code}>
                {c.country} ({c.code})
              </option>
            ))}
          </Select>
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={10}
            required
          />
        </div>

        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Leave Us A Message..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Product
            </option>
            {BOSProducts.filter(
              (product) => product.serviceName !== "Choose Product"
            ).map((product, i) => (
              <option key={i} value={product.serviceName}>
                {product.serviceName}
              </option>
            ))}
          </Select>
        </div>

        <Button type="submit" className="w-full py-2 mt-2">
          {loading ? "Submitting..." : "Submit Now"}
        </Button>

        {responseMessage && (
          <p className="mt-4 text-red-500">{responseMessage}</p>
        )}
      </form>
      {/* OTP popup */}
      {showOtpPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
          <OtpPopUp
            CustomerName={formData.firstName}
            CustomerMobileNo={`${countryCode}${formData.phone}`}
            customerEmailID={formData.email}
            customerRemarks={`${formData.company} (company) | ${service} (service) | ${formData.message} (message)`}
          />
        </div>
      )}
    </div>
  );
}
