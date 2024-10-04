import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoChatboxOutline,
  IoCallOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const toggleAccordion = (section, index) => {
    if (activeSection === section && activeIndex === index) {
      setActiveSection(null);
      setActiveIndex(null);
    } else {
      setActiveSection(section);
      setActiveIndex(index);
    }
  };

  const faqSections = {
    Orders: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy on all items. Items must be returned in their original condition.",
      },
      {
        question: "Can I change my order after placing it?",
        answer: "Yes, you can change your order within 24 hours of placing it.",
      },
    ],
    Payment: [
      {
        question: "Do you accept all credit cards?",
        answer:
          "We accept all major credit cards including Visa, MasterCard, and American Express.",
      },
    ],
    Shipping: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping usually takes 5-7 business days depending on your location.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship worldwide. International shipping times may vary based on destination.",
      },
    ],
    General: [
      {
        question: "Do you offer customer support?",
        answer: "Yes, we offer 24/7 customer support via email and chat.",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      {Object.keys(faqSections).map((section, secIndex) => (
        <div key={secIndex} className="mb-8">
          <h2 className="uppercase bg-[#fbedd7] p-2 font-[500] my-5">
            {section}
          </h2>
          {faqSections[section].map((faq, index) => (
            <div key={`${section}-${index}`} className="mb-4">
              <button
                onClick={() => toggleAccordion(section, index)}
                className="w-full text-left bg-gray-100 p-4 rounded-lg focus:outline-none transition duration-300 ease-in-out hover:bg-gray-200"
                aria-expanded={
                  activeSection === section && activeIndex === index
                }
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{faq.question}</h2>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeSection === section && activeIndex === index
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeSection === section && activeIndex === index
                    ? "max-h-screen"
                    : "max-h-0"
                }`}
              >
                <p className="p-4 bg-white rounded-b-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">
          Get in Touch
        </h1>

        {/* Call Us Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center my-4 sm:my-8 space-x-0 sm:space-x-3 space-y-3 sm:space-y-0">
          <IoCallOutline className="text-teal-500 text-3xl md:text-4xl" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            CALL US
          </h2>
        </div>
        <p className="text-gray-600 text-center sm:text-left mb-2">
          (India){" "}
          <span className="font-bold text-gray-800">1800 120 000 500</span> (Mon
          to Sat 10:00 am to 7:00 pm)
        </p>
        <p className="text-gray-600 text-center sm:text-left mb-6">
          (International){" "}
          <span className="font-bold text-gray-800">+91 9674373838</span>
        </p>

        {/* Contact Methods Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center my-[5rem] w-full space-y-6 md:space-y-0 md:gap-[5rem]">
          {/* Email Us Section */}
          <div className="flex flex-col items-center mx-4 text-center">
            <MdOutlineEmail className="text-teal-500 text-2xl md:text-3xl mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              EMAIL US
            </h3>
            <p className="text-gray-600">care@vedantfashions.com</p>
          </div>

          {/* Chat with Us Section */}
          <div className="flex flex-col items-center mx-4 text-center">
            <IoChatboxOutline className="text-teal-500 text-2xl md:text-3xl mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              CHAT WITH US
            </h3>
            <p className="text-gray-600">Live Chat (10:00 am to 7:00 pm).</p>
          </div>

          {/* WhatsApp Section */}
          <div className="flex flex-col items-center mx-4 text-center">
            <IoLogoWhatsapp className="text-teal-500 text-2xl md:text-3xl mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              WHATSAPP
            </h3>
            <p className="text-gray-600">+91 90512 25122</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
