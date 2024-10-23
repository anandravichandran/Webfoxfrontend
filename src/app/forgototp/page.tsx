
// "use client"; // Add this line at the top

// import React, { useState } from 'react';
// import { useRouter } from "next/navigation";
// import { Spotlight } from "../login/ui/Spotlight";
// import MagicButton from "@/components/ui/MagicButton";
// import { FaLocationArrow,FaRegEnvelope} from "react-icons/fa6";
// import Link from 'next/link';
// import { Button } from "../login/ui/MovingBorder";
// import { useNavigate, useParams } from 'react-router-dom';


// interface FormData {
//   otp: string;
//   email: string;
// }

// // ForgetPassword Component
// const Forgototp: React.FC = () => {
  
//   const [formData, setFormData] = React.useState<FormData>({ email: '', otp: '' });
//     const router = useRouter();
  
//     // Handle email input change
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     // Handle OTP sending
//     const handleSendOTP = async (e: React.MouseEvent<HTMLButtonElement>) => {
//       try {
//           const response = await fetch('http://localhost:5000/forgot_password', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ email: formData.email }),
//           });
  
//           if (!response.ok) {
//               const { message } = await response.json();
//               throw new Error(message || 'invalid email');
//           }
  
//           console.log('Forget password request successful');
//       } catch (error) {
//           console.log(error);
//       }
//   };
  
  
//     // Handle OTP verification
//     const handleSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
//       e.preventDefault(); // Prevent default behavior for button click
//       try {
//           const response = await fetch('http://localhost:5000/verify_otp', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ email: formData.email, otp: formData.otp }),
//           });
  
//           if (!response.ok) {
//               const { message } = await response.json();
//               throw new Error(message || 'invalid otp');
//           }
  
//           // Clear form data on successful verification
//           setFormData({ email: formData.email, otp: '' });
//           console.log('Verify successful');
//           router.push(`/resetpassword/${formData.email}`);
//       } catch (error) {
//           console.log(error);
//       }
//   };
  
  
//     function handleSubmit(event: FormEvent<HTMLFormElement>): void {
//       throw new Error('Function not implemented.');
//     }
    
//   return (
//     <div className="h-screen w-screen overflow-hidden relative">
//       <div>
//         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//         <Spotlight className="top-20 left-full h-[70vh] w-[100vw]" fill="purple" />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
//         {/* Radial gradient for the container to give a faded look */}
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>
//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//         {/* OTP Input Section */}

// {/* ===============logo section */}
// <div>
//             {/* Logo */}
//             <img src="/Webfoxshield.png" alt="Logo" className="fixed top-0 left-3 h-40 z-[900]" />
//           </div>

//         <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl">
//           {/* Sign Section */}
//           <div className="w-3/5 p-5">
//             <div className="text-left font-bold">
//               <span className="text-blue-950">Company</span>Name
//             </div>
//             <div className="py-10">
//               <h2 className="text-3xl font-bold text-blue-950 mb-2">User Verification</h2>
//               <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>

//               {/* Text */}
//               <p className="text-gray-950 text-xl text-center mb-5">Enter your OTP Number</p>
//               <form onSubmit={handleSubmit}>
//               <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-2xl">
//                   <FaRegEnvelope className="text-gray-100 mr-2" />
//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     // value={FormData.email}
//                     // onChange={(e) => FormData({ ...formData, email: e.target.value })}
//                     placeholder="Enter Your Email"
//                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                   />
//                 </div>
//                 <div>
//                   <button className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4 transform translate-x-[100px] translate-y-[2px]"type="button" onClick={handleResendOTP}>Get OTP</button>
//                   </div>
//               <div className="relative rounded-lg max-w-lg m-auto">
//                 {/* OTP Input Boxes */}
//                 <div className="flex justify-center space-x-3 mb-5 translate-y-[45px]">
//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       type="text" // Changed from number to text
//                       name="otp"
//                       value={digit}
//                       onChange={(e) => handleOtpChange(e.target, index)}
//                         onFocus={() => handleFocus(index)}
//                         onBlur={() => handleBlur(index)}
//                         className="otp-input"
//                       maxLength={1} 
//                       className={`w-14 h-14 text-center text-lg rounded-lg border transition-all ${
//                         filled[index]
//                           ? "border-blue-500 bg-black-200 outline-purple-500 outline-2"
//                           : "border-blue-950"
//                       } focus:ring-2 focus:ring-violet-800 focus:outline-none`}
                      
                      
//                     />
//                   ))}
//                 </div>

//                 {/* Verify Button */}
//                 <div className="flex justify-center items-center">
                  
//                   <button className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4 translate-y-[45px]">
//                     Verify
//                   </button>
                
//                 </div>
                
//               </div>
//               </form>
//             </div>
//           </div>

//           {/* SignUp Section */}
//           <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
//             <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
//             <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
//             <p className="mb-5 text-center">Fill up personal information and start your journey with us</p>
//             {/* Sign In Button */}
//             <div className="flex justify-center items-center">
              
//             <MagicButton
//               title="Signin"
//               icon={<FaLocationArrow />}
//               position="left"
// />
             
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'></div>
//       </div>
//     </div>
//   );
// };

// export default forgototp;


"use client";

import React, { useState, FormEvent } from 'react';
import { useRouter } from "next/navigation";
import { Spotlight } from "../login/ui/Spotlight";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow, FaRegEnvelope } from "react-icons/fa6";
import Link from 'next/link';
import { Button } from "../login/ui/MovingBorder";

interface FormData {
  otp: string;
  email: string;
}

// ForgetPassword Component
const Forgototp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', otp: '' });
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [filled, setFilled] = useState<boolean[]>(Array(6).fill(false)); // For visual styling
  const router = useRouter();

  // Handle email input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle OTP input change
     // Update the OTP state on input change
  const handleOtpChange = (element: HTMLInputElement, index: number) => {
      const value = element.value;

      // Allow only digits
      if (isNaN(Number(value))) return;

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Update filled status
      const newFilled = [...filled];
      newFilled[index] = value.length > 0;
      setFilled(newFilled);

      // Move focus to the next input if the current input is filled
      if (value && index < otp.length - 1) {
          const nextInput = element.nextElementSibling as HTMLInputElement;
          if (nextInput) {
              nextInput.focus();
          }
      }

      // Handle deletion (backspace)
      if (!value && index > 0) {
          const prevInput = element.previousElementSibling as HTMLInputElement;
          if (prevInput) {
              prevInput.focus();
          }
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

  // Handle OTP sending
  const handleSendOTP = async () => {
    try {
      const response = await fetch('http://localhost:5000/forgot_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Invalid email');
      }

      console.log('Forget password request successful');
    } catch (error) {
      console.log(error);
    }
  };

  // Handle OTP verification
  const handleSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp: otp.join('') }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Invalid OTP');
      }

      setFormData({ email: formData.email, otp: '' });
      setOtp(Array(6).fill(''));
      console.log('Verify successful');
      router.push(`/resetpassword/${formData.email}`);
    } catch (error) {
      console.log(error);
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
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div>
          <img src="/Webfoxshield.png" alt="Logo" className="fixed top-0 left-3 h-40 z-[900]" />
        </div>

        <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign Section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-950">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-950 mb-2">User Verification</h2>
              <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>

              <p className="text-gray-950 text-xl text-center mb-5">Enter your OTP Number</p>
              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-2xl">
                <FaRegEnvelope className="text-gray-100 mr-2" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                />
              </div>

              <button
                className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4  translate-x-[100px]"
                type="button"
                onClick={handleSendOTP}
              >
                Get OTP
              </button>

              <div className="flex justify-center space-x-3 mb-5 mt-10">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onFocus={() => handleFocus(index)}
                    onBlur={() => handleBlur(index)}
                    maxLength={1}
                    className={`w-14 h-14 text-center text-lg rounded-lg border transition-all ${
                      filled[index]
                        ? "border-blue-500 bg-black-200 outline-purple-500 outline-2"
                        : "border-blue-950"
                    } focus:ring-2 focus:ring-violet-800 focus:outline-none`}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4"
                  onClick={handleSubmitClick}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>

          {/* SignUp Section */}
          <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h1 className="text-center text-3xl font-bold mb-2"></h1>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
            <p className="mb-5 text-center">We got you back !! Enter your Email to recieve the verification Code</p>
            <div className="flex justify-center items-center">
              <MagicButton title="Signin" icon={<FaLocationArrow />} position="left" />
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

export default Forgototp;
