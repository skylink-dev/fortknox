"use client";
import Image from "next/image";

export default function ContactUs() {

  return (
    <>
     <section id="form" style={{ backgroundColor: "#FCF5EB" }}>
            <div className="h-[110px]"></div>
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-stretch gap-16 justify-between bg-white p-10 rounded-3xl overflow-hidden">
                <div className="w-full lg:w-1/2 text-black flex flex-col justify-start h-auto">
                  <h1 className="text-4xl font-bold text-black mb-4">
                    Ready to take your <br /> first step <span className="text-red-600">today ?</span>
                  </h1>
                              <div className="support-img-container">
                  <Image src="/assets/support.png" width={1200} height={900} alt="contact"></Image>
                </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <form
                    action="#"
                    method="POST"
                    className=""
                  >
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Got questions? <span className="text-red-600">We are all ears!</span>
                    </h2>
                    {/* Business Name */}
                    <div>
                      <label htmlFor="CASECF1" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="CASECF1"
                        name="CASECF1"
                        maxLength="255"
                        placeholder="Business name"
                        className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                      />
                      <span className="text-red-500 text-sm hidden" id="name-err">Please enter name</span>
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                      />
                      <span className="text-red-500 text-sm hidden" id="email-err">Please enter a valid email address</span>
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="Phone" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="Phone"
                        name="Phone"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                      />
                      <span className="text-red-500 text-sm hidden" id="phone-number-err">Please enter a valid mobile number</span>
                    </div>
                    {/* State */}
                    <div>
                      <label htmlFor="CASECF3" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                        Select State <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="CASECF3"
                        name="CASECF3"
                        className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                      >
                        <option value="">Select a state</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        {/* Add more states as needed */}
                      </select>
                      <span className="text-red-500 text-sm hidden" id="state-err">Please select the state</span>
                    </div>
                    {/* Requirements */}
                    <div>
                      <label htmlFor="Description" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                        Elaborate your requirements
                      </label>
                      <textarea
                        id="Description"
                        name="Description"
                        placeholder="Requirements"
                        className="w-full border border-gray-300 rounded-md p-2 my-2 bg-white"
                        rows="4"
                      ></textarea>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      By submitting this form, you agree to our{' '}
                      <a href="/policy/privacy-policy" className="text-blue-600 underline text-gray-900" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>.
                    </p>
                    <div>
                      <input
                        type="submit"
                        id="formsubmit"
                        value="Submit"
                        className="w-full bg-red-600 text-white py-4 px-4 rounded-full hover:bg-blue-700 transition mb-2"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="h-[110px]"></div>
          </section>
    </>
  );
}
