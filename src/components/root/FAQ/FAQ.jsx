import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-gray-50 py-12'>
            <div className="max-w-4xl mx-auto px-6">
                {/* Heading Section */}
                <h2 className="text-4xl font-bold text-indigo-600 text-center mb-6">
                    Frequently Asked Questions
                </h2>
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
                        ⚠️ <span className="font-bold">Important Notice:</span> Certain destinations have travel restrictions.{" "}
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
                                "Explore exotic locations like Bali, Maldives, and Santorini. Discover hidden travel gems too!",
                        },
                        {
                            question: "Can I customize my travel itinerary?",
                            answer:
                                "Of course! Work with our travel experts to design a trip that suits your unique preferences.",
                        },
                        {
                            question: "What is included in the travel packages?",
                            answer:
                                "Our packages include accommodations, meals, guided tours, and transport. Custom options available too.",
                        },
                        {
                            question: "Are there any travel restrictions I should know about?",
                            answer:
                                "Visa or vaccination requirements may apply to certain destinations. We'll guide you through the process.",
                        },
                        {
                            question: "How do I book a tour?",
                            answer:
                                "Visit our website, select your dream destination, and book your tour with ease!",
                        },
                    ].map((faq, index) => (
                        <details
                            key={index}
                            className="bg-white border-l-4 border-indigo-500 shadow-lg rounded-lg overflow-hidden"
                        >
                            <summary className="cursor-pointer p-5 text-lg font-semibold text-indigo-600 hover:bg-indigo-50 transition duration-200">
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