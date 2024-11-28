import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/assets/images/aboutUs.jpg";
const page = () => {
  const teamMembers = [
    {
      name: "Rocky Haque",
      title: "Team Leader",
      image: "https://i.ibb.co.com/yPmmNyF/rakibul-haq-roky.jpg", // Replace with actual paths in your public folder
    },
    {
      name: "Kh Istekharul Haque",
      title: "Frontend Developer",
      image: "https://i.ibb.co.com/gZ9V9Lx/1718254558953-removebg-preview.png",
    },
    {
      name: "Fardin Ahmed Alif",
      title: "Backend Developer",
      image: "https://i.ibb.co.com/f9zdFkq/Porfile.jpg",
    },
    {
      name: "Madhob mozumder",
      title: "Backend Developer",
      image: "https://i.ibb.co.com/CBJCKwY/IMG-1067-removebg-preview-2.png",
    },
    {
      name: "Ali Akbor Titu",
      title: "UI/UX Designer",
      image: "https://i.ibb.co.com/vsXRHQH/Iffarur-Rahat.jpg",
    },
  ];
  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "50+", label: "Destinations Covered" },
    { value: "5K+", label: "Happy Travelers" },
    { value: "4.8/5", label: "Average Rating" },
  ];
  
  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="aboutBG bg-fixed container m-auto rounded-xl ">
        <div className="bg-yellow-900 w-full h-full bg-opacity-40 flex flex-col items-center rounded-xl justify-center">
          <h1 className="text-5xl font-extrabold uppercase text-white text-wrap">
            About{" "}
            <span className="text-blue-400">
              Journey <span className="text-blue-900">Trails</span>
            </span>
          </h1>
          <div className="w-full mx-auto container text-center mt-5">
            <p className="text-white font-bold  uppercase">
              Discover who we are and what makes us passionate about
              <br />
              creating unforgettable travel experiences.
            </p>
          </div>
        </div>
      </div>
      {/* Section Heading */}

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* About Image */}
        <div className="relative w-full h-96">
          <Image
            src={aboutImage}
            alt="About Us"
            layout="fill"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="text-gray-700">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="mb-6">
            At <strong>Journey Trails</strong>, we believe that travel is not
            just about visiting new places but about embracing new cultures,
            creating connections, and cherishing lifelong memories. Our story
            began with a simple dream—to make the world more accessible and
            inviting for everyone.
          </p>
          <p className="mb-6">
            Whether it's a serene getaway to nature's wonders, a bustling city
            adventure, or a cultural exploration, we curate every experience
            with love and attention to detail. From the moment you book with us,
            our team is dedicated to ensuring your journey is seamless and
            extraordinary.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Tailor-made itineraries that suit your style and preferences.
            </li>
            <li>
              Experienced guides and local experts for authentic insights.
            </li>
            <li>Commitment to sustainable and eco-friendly tourism.</li>
            <li>24/7 support to make your journey stress-free.</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto lg:ml-52 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-lg py-4 shadow-sm"
              >
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 mt-2">
              At the heart of our journey lies a commitment to inspire, explore,
              and create unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted travel partner by offering
                unique, sustainable, and life-enriching travel experiences that
                bring people closer to the beauty of the world and its diverse
                cultures.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide personalized, eco-friendly, and
                affordable travel solutions that empower explorers to discover
                breathtaking destinations while fostering respect for nature and
                local communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Our beautiful Team
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Our team is made up of passionate individuals who are dedicated to
          making your travel dreams a reality.{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <Image
                src={member.image}
                alt={`${member.name}'s picture`}
                width={700}
                height={800}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              {/* Overlay */}

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-2 text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-white">
                <div className="w-full bg-black bg-opacity-50 p-4">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
