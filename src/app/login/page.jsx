import React from 'react';
import Link from 'next/link';
import LoginForm from './componets/LoginForm';
import SocialLogin from './componets/SocialLogin';
function Login(props) {
    return (
           <div>
            

   <div className=' w-11/12 mx-auto py-10 flex flex-col items-center justify-center  min-h-[calc(100vh-150px)]'>


<div className="md:max-w-sm   mx-auto border border-[#ff99c8] rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Login Now !</h2>
     <LoginForm></LoginForm>
    </div>

<div>


<div className="flex w-[300px] items-center my-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <span className="mx-2 text-sm">Or</span>
  <div className="flex-grow  h-px bg-gray-300"></div>
</div>


<div className='flex flex-col gap-4  items-center justify-center'>


<SocialLogin></SocialLogin>  



</div>

</div>


</div>


        </div>
    );
}

export default Login;