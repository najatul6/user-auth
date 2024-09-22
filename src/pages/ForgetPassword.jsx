import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const ForgetPassword = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        // Reset Password
        sendPasswordResetEmail(auth,email)
       .then((result)=>{
        console.log(result);
       })
       .catch((error) => {
        console.log(error.message);
       });

    }
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <form onClick={handleSubmit} className="flex justify-center items-center">
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
    </div>
  );
};

export default ForgetPassword;
