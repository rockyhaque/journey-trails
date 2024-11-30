"use client";
import React, { useRef, useState } from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import emailjs from "@emailjs/browser";
const Page = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <IoSearchOutline className="text-3xl text-blue-600" />,
      label: "102 Street 2714 Don",
    },
    {
      icon: <FaPhoneVolume className="text-3xl text-blue-600" />,
      label: "+88 1234 567",
    },
    {
      icon: <MdOutlineMarkEmailUnread className="text-3xl text-blue-600" />,
      label: "hello@flowbase.com",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) {
      console.error(
        "Form reference is null. Ensure the ref is attached to the form element."
      );
      setFeedbackMessage("Failed to send message. Please try again.");
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_EMAIL_SERVICE_ID, // Your service ID
        process.env.NEXT_EMAIL_TEMPLATE_ID, // Your template ID
        form.current, // The form reference
        process.env.NEXT_EMAIL_KEY // Your public key       // Your public key
      )
      .then(
        () => {
          setFeedbackMessage("Your message was emailed successfully!");
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error);
          setFeedbackMessage(
            "There was an error sending your message. Please try again."
          );
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-100">
      <div className=" mx-auto min-h-screen  p-2">
        {/* Contact Header */}
        <div className="contactBG bg-fixed container mx-auto rounded-xl">
          <div className="bg-black w-full h-full bg-opacity-40 flex flex-col items-center rounded-xl justify-center py-10 px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-white">
              Contact{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-black to-blue-900">
                Journey Trails
              </span>
            </h1>
            <p className="text-gray-300 font-bold mt-4 sm:mt-6">
              Have any questions or need assistance? Reach out to us, and <br />
              our team will get back to you promptly to help with your inquiry.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="bg-gray-100 py-16 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-cyan-50 shadow-md shadow-blue-400 rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-white"
              >
                {/* Icon */}
                <div>{info.icon}</div>
                {/* Label */}
                <p className="mt-4 text-gray-700 font-medium">{info.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto flex items-center justify-center px-4">
          <div className="container mt-14 gap-6">
            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-blue-900">
                Message Us
              </h2>
              <p className="text-center text-sm sm:text-base mb-4">
                We'll get Back to You within 24 hours
              </p>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="w-full mt-1 px-3 py-2 border rounded-md text-black focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your email"
                    className="w-full mt-1 px-3 py-2 border rounded-md text-black focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your message"
                    rows="4"
                    className="w-full mt-1 px-3 py-2 border rounded-md text-black focus:outline-none focus:border-indigo-500"
                  ></textarea>
                </div>
                {/* Add a hidden field for to_name */}
                <input type="hidden" name="to_name" value="Support Team" />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full mt-4 px-4 py-2 font-medium text-white rounded-md ${
                    isLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
              <p className="p-5 text-center text-gray-500">
                Always feel free to contact us
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 text-center">
          <FaLocationDot className="text-4xl m-auto mt-5 text-center text-red-700" />
          <h3 className="text-xl sm:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-blue-900">
            Our Location
          </h3>
        </div>
        <div className="w-full bg-sky-200 p-4 sm:p-8 rounded-lg mt-12">
          <iframe
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1778.5774289816625!2d90.41729640262331!3d23.830790125043748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700015417af%3A0x1b204d2026346e89!2sATLAS%20ELEVATOR%20LIMITED!5e0!3m2!1sen!2sbd!4v1732805051404!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
