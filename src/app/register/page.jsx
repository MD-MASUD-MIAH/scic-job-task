import Link from "next/link";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "../login/componets/SocialLogin";

function Register(props) {
  return (
    <div>
      <div className=" w-11/12 mx-auto py-10 flex flex-col items-center justify-center">
        <div className="md:max-w-sm   mx-auto border border-[#ff99c8] rounded p-6 shadow ">
          <h2 className="text-xl font-semibold mb-6">Register Now !</h2>
          <RegisterForm></RegisterForm>


        </div>

        <div>
          <div className="flex w-[300px] items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-sm">Or</span>
            <div className="flex-grow  h-px bg-gray-300"></div>
          </div>

          <div className="flex flex-col gap-4  items-center justify-center">
           <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
