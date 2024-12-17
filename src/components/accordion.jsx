import { useState } from "react";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLockedContent = () => {
    alert("Buy the course to unlock these exclusive content!");
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
              {item.content.map((content, index) =>
                index === 0 && item.file ? (
                  <div
                    key={index}
                    className="text-black-700 bg-teal-50 p-4 my-2 rounded-md"
                  >
                    <img src="/free.svg" className="inline h-4 p-0 m-0 px-4" />
                    <a href={item.file}>{content}</a>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="text-gray-600 bg-gray-100 p-4 my-2 rounded-md cursor-not-allowed"
                    onClick={handleLockedContent}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 30 30"
                      className="inline h-4 p-0 m-0 px-4 fill-gray-600"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                    </svg>
                    {content}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
