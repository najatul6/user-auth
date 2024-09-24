import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const ForgetPassword = () => {
    const [getText,setText]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Reset Password
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
        toast("Password Reset Email Sent!");
        e.target.reset();
        setText('Check your Email inbox')

      })
      .catch((error) => {
        console.log(error.message);
        toast(error.code);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
        <ToastContainer position="top-center" autoClose={1500} />
      <form onSubmit={handleSubmit} className="flex justify-center items-center">
        <input
          type="email"
          name="email"
          id=""
          className="rounded-s-xl w-full md:w-[600px] text-sm border-b border-gray-300 focus:border-blue-600 px-5 py-3 outline-none"
          placeholder="Enter email Address"
        />
        <button
          type="submit"
          className="shadow-xl h-full py-2.5 px-4 text-sm tracking-wide rounded-r-xl text-white bg-[#FFA726] hover:bg-[#ffa826b8] focus:outline-none"
        >
          Submit
        </button>
      </form>
      <p className="font-bold text-lg py-2 text-[#FFA726]">{getText}</p>
    </div>
  );
};

export default ForgetPassword;
