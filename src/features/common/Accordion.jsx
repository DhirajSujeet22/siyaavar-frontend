import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-gray-800 mb-2 py-3">
      <button
        onClick={toggleAccordion}
        className={`flex justify-between items-center w-full p-4 text-left focus:outline-none transition ${
          isOpen ? "bg-gray-200" : "bg-transparent"
        }`}
      >
        <span className="font-medium text-gray-900">{title}</span>
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="p-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
