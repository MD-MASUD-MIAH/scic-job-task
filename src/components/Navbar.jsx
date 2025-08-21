"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
function Navbar(props) {
  const { data: session, status } = useSession();
  console.log(session);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
        Swal.fire({
          title: "Logout!",
          text: "Logout Success.",
          icon: "success",
        });
      }
    });
  };

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/medicines"}>Medicines</Link>
      </li>
      <li>
        <Link href={"/dashboard/add-medicine"}>Add Medicine</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#ff99c8] sticky top-0 z-20 text-white ">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Image
              alt="logo"
              width={40}
              height={40}
              className=" "
              src={
                "https://i.ibb.co.com/fG0MJdqM/Medical-Logo-Graphics-1-29-580x386-removebg-preview.png"
              }
            ></Image>
            <p className="font-bold text-xl hidden md:block">HealthNest</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4 ">
          {status == "authenticated" ? (
            <>
              <Image
                width={50}
                height={50}
                alt="
                user photo"
                className="rounded-full border border-white"
                src={
                  session?.user?.image ||
                  "https://i.ibb.co.com/9J4wLk7/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image-15526568.png"
                }
              ></Image>

              <button onClick={handleLogout} className="btn nav-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={"/login"} className="btn nav-btn ">
                Login
              </Link>
              <Link href={"/register"} className="btn nav-btn ">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
