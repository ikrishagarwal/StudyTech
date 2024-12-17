import { useState } from "react";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleToggle(index)}
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
