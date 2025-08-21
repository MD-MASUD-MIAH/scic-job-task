"use client";
; 
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
function LoginForm(props) {

      const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    toast("Submitting....");

    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response.ok) {
        router.push("/medicines");
        e.target.reset();
       Swal.fire({
  title: "Logged In Successfully!",
  icon: "success",
  draggable: true
});
      } else {
      

        Swal.fire({
  icon: "error",
  title: "Authentication filed",
  text: "Something went wrong!",

});

      }
    } catch (error) {
     Swal.fire({
  icon: "error",
  title: "Authentication filed",
  text: "Something went wrong!",

});
    }
   
  };
    return (
       <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Username or Email</label>
          <input
            required
         
          name='email'
            type="email"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your username or email"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input name='password'
            type="password"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your password"
            required
           

          />
        </div>

        <div className="flex items-center justify-between text-sm">
        
         
        </div>


        <button
          type="submit"
          className="w-full btn tom-btn"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account? Please{' '} 
          <Link  href="/register" className="text-[#ff99c8] underline">
          Register
          </Link>
        </p>
      </form>
    );
}

export default LoginForm;