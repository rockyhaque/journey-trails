import Image from "next/image";
import Container from "@/components/ui/Container";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLocationDot, FaPhone } from "react-icons/fa6";

import image1 from "../../../../public/assets/images/footer-icons/client-logo-1.png";
import image2 from "../../../../public/assets/images/footer-icons/client-logo-2.png";
import image3 from "../../../../public/assets/images/footer-icons/client-logo-3.png";
import image4 from "../../../../public/assets/images/footer-icons/client-logo-4.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-hero-pattern bg-cover bg-center mt-16">
        <Container>
          {/* footer image */}
          <div className="flex flex-wrap items-center justify-around space-y-5 sm:space-y-0 pt-16 gap-5 mb-12 sm:mb-16 md:mb-20">
            <Image src={image1} height={149} width={216} alt="Footer Icon" />
            <Image src={image2} height={149} width={216} alt="Footer Icon" />
            <Image src={image3} height={149} width={216} alt="Footer Icon" />
            <Image src={image4} height={149} width={216} alt="Footer Icon" />
          </div>

          <div>
            <h5 className="text-primary text-lg md:text-xl font-semibold mb-3 text-center">
              Subscribe Now
            </h5>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-white text-center">
              Get the Latest News
            </h2>

            <div className="flex justify-center">
              <div className="w-11/12 sm:w-10/12 md:w-1/2 relative">
                <input
                  type="email"
                  name="email"
                  className="py-2 md:py-2.5 lg:py-3 px-1.5 md:px-3 outline-none w-full"
                  placeholder="Enter email"
                />
                <span>
                  <IoIosSend className="absolute text-xl top-3 right-4" />
                </span>
              </div>
            </div>
          </div>

          {/* footer main */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-white text-center sm:text-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">
                Journey Trails
              </h2>
              <p className="mb-3 sm:mb-4 md:mb-6">
                Embark on an adventure with Journey Trails. It's not just about
                fun—it's about discovering yourself through thrilling
                experiences. Dive into exciting activities and live in the
                moment like never before.
              </p>
              <div className="flex justify-center sm:justify-start gap-2">
                <p className="bg-white p-2 md:p-3 rounded-full">
                  <FaFacebookF className="text-lg md:text-xl text-green-950" />
                </p>
                <p className="bg-white p-2 md:p-3 rounded-full">
                  <FaXTwitter className="text-lg md:text-xl text-green-950" />
                </p>
                <p className="bg-white p-2 md:p-3 rounded-full">
                  <FaLinkedinIn className="text-lg md:text-xl text-green-950" />
                </p>
                <p className="bg-white p-2 md:p-3 rounded-full">
                  <FaInstagram className="text-lg md:text-xl text-green-950" />
                </p>
              </div>
            </div>
            <div className="md:pl-12">
              <h2 className="sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 md:mb-8">
                Useful Links
              </h2>
              <ul className="mb-4 space-y-2">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link href={"/destinations"}>Destinations</Link>
                </li>
                <li>
                  <Link href={"/login"}>Signin</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 md:mb-8">
                Support Links
              </h2>
              <ul className="mb-4 space-y-2">
                <li>Ask a Question</li>
                <li>Delivery Terms</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h2 className="sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 md:mb-8">
                Reach Us
              </h2>
              <ul className="mb-4 space-y-2 md:space-y-4">
                <li className="flex justify-center sm:justify-start items-start gap-1">
                  <FaLocationDot />
                  <span className="-mt-1">
                    932 Galvin St. Pompano Beach, FL 33060
                  </span>
                </li>
                <li className="flex justify-center sm:justify-start items-start gap-1.5">
                  <MdEmail />
                  <span className="-mt-1">journey.trails@gmail.com</span>
                </li>
                <li className="flex justify-center sm:justify-start items-start gap-1">
                  <FaPhone />
                  <span className="-mt-1">+77850555771</span>
                </li>
              </ul>
            </div>
          </div>

          {/* footer down */}
          <div className="md:mt-5 text-white">
            <div className="py-2 sm:py-3 md:py-4 lg:py-5">
              <p className="border border-dashed border-[#527969] w-full mb-5"></p>
              <div className="sm:flex justify-between text-sm sm:text-base">
                <p className="text-center sm:text-start">
                  © {new Date().getFullYear()} Created by Journey Trails
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-3 sm:gap-5 mt-1 sm:mt-0">
                  <span>Help</span>
                  <span className="">Privacy Policy</span>
                  <span className="">Terms & Conditions</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
