const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="w-full flex items-center justify-center my-12">
          <div className="absolute top-40 bg-[#253544] shadow-2xl rounded py-12 lg:px-28 px-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center ">
              Let’s chat and get a quote!
            </p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-[#FFA726] font-semibold leading-none ">
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-[#FFA726] leading-none  p-3 focus:oultine-none focus:border-[#FFA726] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-[#FFA726] font-semibold leading-none ">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-[#FFA726] leading-none  p-3 focus:oultine-none focus:border-[#FFA726] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-[#FFA726] font-semibold leading-none ">
                  Company name
                </label>
                <input
                  tabIndex={0}
                  role="input"
                  arial-label="Please input company name"
                  type="name"
                  className="text-[#FFA726] leading-none  p-3 focus:oultine-none focus:border-[#FFA726] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-[#FFA726] font-semibold leading-none ">
                  Country
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="name"
                  className="text-[#FFA726] leading-none  p-3 focus:oultine-none focus:border-[#FFA726] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-[#FFA726] font-semibold leading-none ">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-[#FFA726] leading-none  p-3 focus:oultine-none focus:border-[#FFA726] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="text-xs leading-3  mt-4">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9  font-semibold leading-none text-white py-4 px-10 bg-[#FFA726] rounded hover:bg-[#FFA726] focus:ring-2 focus:ring-offset-2 focus:ring-[#FFA726] focus:outline-none">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
