import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <div className="max-w-4xl mx-auto px-6">
         {/* Heading Section */}
        <SectionHeading title="Frequently Asked Questions" />
       
        <p className="text-lg text-gray-600 text-center mb-10">
          Got questions about our travel services? Find answers below or{" "}
          <a href="#" className="text-indigo-500 underline font-medium">
            contact us
          </a>{" "}
          for more information.
        </p>

        {/* Notice Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-6 rounded-lg shadow-lg mb-10">
          <p className="text-md">
            ⚠️ <span className="font-bold">Important Notice:</span> Certain
            destinations have travel restrictions.{" "}
            <a href="#" className="underline text-yellow-600 font-medium">
              Learn more.
            </a>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          {[
            {
              question: "What are the top destinations you offer?",
              answer:
                "We specialize in providing curated travel experiences to some of the world’s most iconic destinations. Our top offerings include Bali, known for its serene beaches, vibrant culture, and luxurious resorts; the Maldives, famous for its crystal-clear waters, private islands, and stunning overwater villas",
            },
            {
              question: "Can I customize my travel itinerary?",
              answer:
                "Absolutely! We believe that every traveler has unique preferences, and our travel experts are here to craft a personalized experience just for you. Whether you want to explore specific landmarks, indulge in local culinary experiences, or include activities like snorkeling, hiking, or cultural tours, we can tailor every detail of your trip. Simply share your preferences, desired destinations, and any special requirements, and we’ll handle the rest.",
            },
            {
              question: "What is included in the travel packages?",
              answer:
                "Our travel packages are designed to provide you with a seamless and enjoyable experience. They typically include accommodations at handpicked hotels, resorts, or boutique lodgings that offer comfort and convenience. Meals are provided, featuring a selection of local and international cuisines with options for full board or half board. ",
            },
            {
              question:
                "Are there any travel restrictions I should know about?",
              answer:
                "Yes, depending on the destination you’re traveling to, there may be specific travel restrictions or requirements. Some countries may require you to obtain a visa prior to travel, and we’ll provide detailed instructions and assistance to make the process straightforward. Certain regions may have health guidelines, such as recommended or mandatory vaccinations (e.g., yellow fever or COVID-19).",
            },
            {
              question: "How do I book a tour?",
              answer:
                "Booking your dream vacation with us is quick and simple. Visit our website to explore our wide range of travel packages and destinations. Select the destination or itinerary that best suits your preferences and budget. If you want to make changes to the package, consult with our travel experts to tailor the trip. ",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="bg-white border-l-4 border-indigo-500 shadow-lg rounded-lg overflow-hidden"
            >
              <summary className="cursor-pointer p-5 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-700 to-blue-900 transition duration-200">
                {faq.question}
              </summary>
              <div className="p-5 border-t border-gray-200 text-gray-700">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
