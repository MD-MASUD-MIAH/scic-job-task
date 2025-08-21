"use client"
import React from 'react';
import Link from "next/link";
 import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { registerUser } from '@/app/action/auth/registerUser';
function RegisterForm(props) {
const router = useRouter();
  
const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const image = form.image.value;
  const password = form.password.value;

 
    try {
      await registerUser({ name, email, image, password });

      Swal.fire({
        title: "Registration Successful 🎉",
        text: "Now login with the same email & password.",
        icon: "success",
        confirmButtonText: "OK",
      })

       router.push("/login"); 

      form.reset();
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: error.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
};


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                required
                name="name"
                type="text"
                className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                placeholder="Enter your Name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Photo URL</label>
              <input
                required
                name="image"
                type="text"
                className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                placeholder="photo url"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Username or Email</label>
              <input
                required
                name="email"
                type="email"
                className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                placeholder="Enter your username or email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                type="password"
                className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm"></div>

            <button type="submit" className=" btn tom-btn w-full">
              Register
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account? Please{" "}
              <Link  href="/login" className="text-[#ff99c8] underline">
                Login
              </Link>
            </p>
          </form>
    );
}

export default RegisterForm;