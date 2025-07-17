"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Replace with your API endpoint
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
        setSubmitSuccess(true);
        reset();
    //   }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Data Center Solutions</title>
        <meta
          name="description"
          content="Get in touch with our data center experts."
        />
      </Head>

      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-6">
                <p className="font-bold">Thank you!</p>
                <p>We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register("firstName", { required: "Required" })}
                      className={`w-full p-3 border rounded ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register("lastName", { required: "Required" })}
                      className={`w-full p-3 border rounded ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    className={`w-full p-3 border rounded ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    className={`w-full p-3 border rounded ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Address</label>
                  <textarea
                    rows={3}
                    {...register("address")}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Message *</label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className={`w-full p-3 border rounded ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:bg-red-600 hover:via-red-580 text-white font-bold py-3 px-4 rounded transition"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Contact Info */}
          <div className="w-full lg:w-1/2">
          {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white py-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-400 rounded-full opacity-20 animate-float1"></div>
                <div className="absolute top-1/4 right-20 w-24 h-24 bg-red-300 rounded-full opacity-15 animate-float2"></div>
                <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-red-200 rounded-full opacity-10 animate-float3"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl font-bold mb-4 animate-text-pop">Contact Us</h1>
                <p className="text-xl animate-text-fade">We'd love to hear from you!</p>
            </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-6 transition-all hover:shadow-xl">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
    Get in Touch
  </h2>
  
  <div className="space-y-6">
    {/* Address Card */}
    <div className="flex items-start gap-5 p-4 rounded-lg group hover:bg-gray-50 hover:cursor-pointer transition-colors duration-300">
      <div className="bg-gray-100 p-3 rounded-full flex-shrink-0 transform group-hover:scale-120 group-hover:bg-gray-200 transition-transform">
        <svg
          className="w-6 h-6 text-red-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">Our Office</h3>
        <p className="text-gray-600 leading-relaxed">
          Fort Knox Data Center A1,<br/> Vue Grande, 339, Siddhapudur,<br/> Coimbatore, Tamil Nadu 641044<br/>
          <span className="text-sm text-gray-900 mt-1 inline-block">Open: Mon-Fri, 9AM-6PM</span>
        </p>
      </div>
    </div>

    {/* Phone Card */}
    <div className="flex items-start gap-5 p-4 rounded-lg group hover:bg-gray-50 hover:cursor-pointer transition-colors duration-300">
      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 transform group-hover:scale-120 group-hover:bg-gray-200 transition-transform">
        <svg
          className="w-6 h-6 text-red-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">Call Us</h3>
        <div className="space-y-1">
          <p className="text-gray-600 flex items-center">
            <span className="inline-block w-24">Main:</span>
            <a href="tel:+918012345678" className="text-gray-900  hover:scale-110  transition-transform duration-300">
              +91 80 1234 5678
            </a>
          </p>
          <p className="text-gray-600 flex items-center">
            <span className="inline-block w-24">Mobile:</span>
            <a href="tel:+919876543210" className="text-gray-900  hover:scale-110  transition-transform duration-300">
              +91 98765 43210
            </a>
          </p>
          <p className="text-sm text-gray-900 mt-1">24/7 Support Available</p>
        </div>
      </div>
    </div>

    {/* Email Card */}
    <div className="flex items-start gap-5 p-4 rounded-lg hover:bg-blue-50 group hover:cursor-pointer transition-colors duration-300">
      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 transform group-hover:scale-120 group-hover:bg-gray-200  transition-transform">
        <svg
          className="w-6 h-6 text-red-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">Email Us</h3>
        <div className="space-y-1">
          <p className="text-gray-600 flex items-center">
            <span className="inline-block w-20">Support:</span>
            <a href="mailto:support@datacenter.com" className="text-gray-900  hover:scale-110  transition-transform duration-300">
              support@datacenter.com
            </a>
          </p>
          <p className="text-gray-600 flex items-center">
            <span className="inline-block w-20">Sales:</span>
            <a href="mailto:sales@datacenter.com" className="text-gray-900  hover:scale-110  transition-transform duration-300">
              sales@datacenter.com
            </a>
          </p>
          <p className="text-sm text-gray-900 mt-1">Typically replies within 24 hours</p>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}
