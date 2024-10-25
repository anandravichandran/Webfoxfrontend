"use client"; // Add this line at the top

import React, { useState,useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Spotlight } from "../login/ui/Spotlight";
import MagicButton from "@/src/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import { Button } from "../login/ui/MovingBorder";
import { useParams } from 'react-router-dom';


interface FormData {
  otp: string;
  email: string;
}

const OtpVerification: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', otp: '' });
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filled, setFilled] = useState<boolean[]>(new Array(6).fill(false));

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;

    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const newFilled = [...filled];
    newFilled[index] = value.length > 0;
    setFilled(newFilled);

    if (value && index < otp.length - 1) {
      const nextInput = element.nextElementSibling as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }

    if (!value && index > 0) {
      const prevInput = element.previousElementSibling as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  const handleFocus = (index: number) => {
    const newFilled = [...filled];
    newFilled[index] = true;
    setFilled(newFilled);
  };

  const handleBlur = (index: number) => {
    const newFilled = [...filled];
    newFilled[index] = otp[index] !== '';
    setFilled(newFilled);
  };

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpValue = otp.join(''); // Join the OTP array into a string

    try {
      const response = await fetch('http://localhost:5000/loginotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: otpValue }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        console.error(message || 'Invalid OTP'); // Error notification
        throw new Error(message || 'Invalid OTP');
      }

      // Clear OTP after successful verification
      setOtp(new Array(6).fill(""));
      console.log('Verification successful'); // Success notification
      router.push(`/login/${formData.email}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message || 'An unexpected error occurred'); // Error notification
      } else {
        console.error('An unknown error occurred');
      }
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch('http://localhost:5000/resend_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        console.error(message || 'Failed to resend OTP'); // Error notification
        throw new Error(message || 'Failed to resend OTP');
      }

      const data = await response.json();
      console.log('OTP resent successfully'); // Success notification
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message || 'An unexpected error occurred'); // Error notification
      } else {
        console.error('An unknown error occurred'); // Fallback for unknown error
      }
    }
  };


  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-20 left-full h-[70vh] w-[100vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* OTP Input Section */}

{/* ===============logo section */}
<div>
            {/* Logo */}
            <img src="/Webfoxshield.png" alt="Logo" className="fixed top-0 left-3 h-40 z-[900]" />
          </div>

        <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign Section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-950">WebFoxShield</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-950 mb-2">User Verification</h2>
              <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>

              {/* Text */}
              <p className="text-gray-950 text-xl text-center mb-5">Enter your OTP Number</p>
              <form onSubmit={handleSubmit}>
              <div className="relative rounded-lg max-w-lg m-auto">
                {/* OTP Input Boxes */}
                <div className="flex justify-center space-x-3 mb-5">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text" // Changed from number to text
                      name="otp"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target, index)}
                        onFocus={() => handleFocus(index)}
                        onBlur={() => handleBlur(index)}
                        className="otp-input"
                      maxLength={1} // Ensure only one digit can be entered
                      // className={`w-14 h-14 text-center text-lg rounded-lg border transition-all ${
                      //   filled[index]
                      //     ? "border-blue-500 bg-black-200 shadow-[0_0_10px_0_rgba(59,130,246,0.7) "
                      //     : "border-blue-950"
                      // } focus:ring-2 focus:ring-violet-800 focus:outline-none`}
                      className={`w-14 h-14 text-center text-lg rounded-lg border transition-all ${
                        filled[index]
                          ? "border-blue-500 bg-black-200 outline-purple-500 outline-2"
                          : "border-blue-950"
                      } focus:ring-2 focus:ring-violet-800 focus:outline-none`}
                      
                      
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <div className="flex justify-center items-center">
                  
                  <button className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4">
                    Verify
                  </button>
                
                </div>
                <div>
                  <button className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4 transform translate-x-[100px] translate-y-[20px]"type="button" onClick={handleResendOTP}>Resend OTP</button>
                  </div>
              </div>
              </form>
            </div>
          </div>

          {/* SignUp Section */}
          <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
            <p className="mb-5 text-center">"Welcome! An OTP Has Been Sent Your Email,Kindly Enter It Below To Proceed With Verification</p>
            {/* Sign In Button */}
            <div className="flex justify-center items-center">
             <Link href="/register">
             
            <MagicButton
              title="Signup"
              icon={<FaLocationArrow />}
              position="left"
/>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'></div>
      </div>
    </div>
  );
};

export default OtpVerification;


