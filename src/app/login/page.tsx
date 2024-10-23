
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaRegEnvelope, FaUser } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { LoginFloatingNav } from "./ui/LoginFloatingNav";
import { Button } from "./ui/MovingBorder";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import axios from 'axios';

     // Define the User type
interface User {
  name: string;
  email: string;
  password: string;
}

// const fetchProtectedData = async () => {
//   if (typeof window !== 'undefined' && (window as any).chrome && chrome.storage && chrome.storage.local) {
//       chrome.storage.local.get('token', async function(result) {
//           const token = result.token;

//           const response = await fetch('/api/protected', {
//               method: 'GET',
//               headers: {
//                   'Authorization': `Bearer ${token}`,
//               },
//           });

//           const data = await response.json();
//           if (response.ok) {
//               console.log('Protected data:', data);
//           } else {
//               console.log(data.message);
//           }
//       });
//   } else {
//       console.log('Chrome storage is not available.');
//   }
// };

const Login: React.FC = () => {
  const router = useRouter(); // For routing after successful login

  const [formData, setFormData] = useState<User>({
      name: '',
      email: '',
      password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ name: string; email: string; password: string }>({
      name: '',
      email: '',
      password: '',
  });

  // useEffect(() => {
  //     fetchProtectedData(); // Fetch protected data on component mount
  // }, []);

  const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate form inputs
      const validationErrors = { name: '', email: '', password: '' };
      if (!isValidEmail(formData.email)) {
          validationErrors.email = 'Email is invalid';
      }
      if (!formData.password || formData.password.length < 8) {
          validationErrors.password = 'Password must be at least 8 characters long';
      }
      setErrors(validationErrors);

      // If there are any validation errors, stop submission
      if (validationErrors.email || validationErrors.password) {
          return;
      }

      try {
          // Make request to the backend for authentication
          const response = await axios.post('http://localhost:5000/login', {
              name: formData.name,
              email: formData.email,
              password: formData.password,
          });

          if (response.status === 200) {
              // Store token in Chrome storage if available
              // if (typeof window !== 'undefined' && (window as any).chrome && chrome.storage && chrome.storage.local) {
              //     chrome.storage.local.set({ token: response.data.token }, () => {
                     
              //     });
              // } else {
              //     console.log('Chrome storage is not available.');
              // }

              // Redirect to the OTP page after successful login
              router.replace('/loginotp');
          } else {
              setErrors({ ...errors, email: 'Invalid email or password' });
          }
      } catch (error) {
          console.error('Login failed:', error);
          setErrors({ ...errors, email: 'Invalid email or password' });
      }
  };


  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-2 left-full h-[70vh] w-[100vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div>
          {/* Logo */}
          <img src="/Webfoxshield.png" alt="Logo" className="fixed top-0 left-3 h-40 z-[900]" />

          {/* Register Button */}
          <div className="fixed top-10 right-10 flex space-x-4 z-[5000]">
            <Link href="/">
              <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Nav */}
        <LoginFloatingNav className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign In Section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-950">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-950 mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>

              {/* Social Login */}
              {/* <div className="flex justify-center my-2">
                  <a href="#" className="border-2 border-gray-950 rounded-xl rounded-br-xl p-3 mx-1">
                    <FaFacebook className="text-2xl text-black-100" />
                  </a>
                  <a href="#" className="border-2 border-gray-950 rounded-xl rounded-br-xl p-3 mx-1">
                    <FaLinkedinIn className="text-2xl text-black-100" />
                  </a>
                  <a href="#" className="border-2 border-black-200 rounded-br-xl rounded-xl p-3 mx-1">
                    <FaGoogle className="text-2xl text-black-100" />
                  </a>
                </div> */}

              {/* <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p> */}
              <form onSubmit={handleSubmit} className="relative rounded-lg max-w-lg m-auto">
                {/* User Input */}
                <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-2xl">
                  <FaUser className="text-gray-100 mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter Your Name"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>

                <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-2xl">
                  <FaRegEnvelope className="text-gray-100 mr-2" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter Your Email"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>

                {/* Password Input */}
                <div className="bg-black-100 w-100 p-2 flex items-center rounded-2xl mb-5">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter Your Password"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                  <div onClick={togglePasswordVisibility} className="cursor-pointer ml-2">
                    {showPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
                  </div>
                </div>

                {/* Remember and Forgot Password */}
                <div className="flex justify-between w-100 mb-5">
                  <label className="flex items-center text-base">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="forgotpassword" className="text-base">
                    Forgot Password?
                  </a>
                </div>

                {/* Sign-in Button */}
               

                  <div className="flex justify-center items-center">
                    <button className="border-2 justify-center border-gray-950 rounded-xl p-3 w-64 text-lg text-white bg-gray-900 mx-auto block hover:bg-orange-500 transition-all duration-300">
                      Sign In
                    </button>
                  </div>
                
              </form>
              {(errors.name || errors.email || errors.password) && (
                <div className="text-red-500 text-center mt-3">
                  {errors.name && <p>{errors.name}</p>}
                  {errors.email && <p>{errors.email}</p>}
                  {errors.password && <p>{errors.password}</p>}
                </div>
              )}
            </div>
          </div>

          {/* Sign Up Section */}
          <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h1 className="text-center text-3xl font-bold mb-2">Good To See You Again!</h1>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
            <p className="mb-5 text-center">Your Secure Access Awaits, Your Protections is Just a Click Away</p>
            <p className="translate-y-36">Not a member yet?Visit the Signu-up to Create Your Account</p>
            <div className="flex justify-center items-center">
              <Link href="/register">
                <MagicButton title="Sign Up" icon={<FaLocationArrow />} position="left" />

              </Link>
             
            </div>
          </div>
        </LoginFloatingNav>
      </div>
    </div>

  );
};

export default Login;