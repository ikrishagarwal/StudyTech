import { Navbar } from "./components/navbar";
import { Accordion } from "./components/accordion";

export const Try = () => {
  const accordionItems = [
    {
      title: "Maths",
      content: `1. What is the value of 2 + 2?`,
    },
  ];

  return (
    <div className="bg-teal-100 min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-teal-600 text-center py-10">
        Previous Year Question
      </h1>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl text-center p-6 font-semibold text-gray-700">
            Available Subjects
          </h1>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};
