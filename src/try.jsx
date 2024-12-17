import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Accordion } from "./components/accordion";

export const Try = () => {
  const accordionItems = [
    {
      title: "Maths",
      content: [
        "Real Numbers",
        "Polynomials",
        "Pair of Linear Equations in Two Variables",
        "Quadratic Equations",
        "Arithmetic Progressions",
        "Triangles",
        "Coordinate Geometry",
        "Introduction to Trigonometry",
        "Some Applications of Trigonometry",
        "Circles",
        "Areas Related to Circles",
        "Surface Areas and Volumes",
        "Statistics",
        "Probability",
      ],
      file: "/real-numbers.pdf",
    },
    {
      title: "Science",
      content: [
        "Chemical Reactions and Equations",
        "Acids, Bases and Salts",
        "Metals and Non-metals",
        "Carbon and its Compounds",
        "Life Processes",
        "Control and Coordination",
        "How do Organisms Reproduce?",
        "Heredity and Evolution",
        "Light - Reflection and Refraction",
        "The Human Eye and the Colorful World",
        "Electricity",
        "Magnetic Effects of Electric Current",
        "Our Environment",
      ],
      file: "/chemical-reactions-and-equations.pdf",
    },
    {
      title: "Social Science",
      content: [
        "Nationalism in Europe",
        "Nationalism in India",
        "The Making of Global World",
        "Print Culture and the Modern World",
        "Resources and Development",
        "Forest And Wildlife Resources",
        "Water Resources",
        "Agriculture",
        "Minerals and Energy Resources",
        "Manufacturing Industries",
        "Power Science",
        "Federalism",
        "Gender Religion Caste",
        "Political Parties",
        "Outcome of Democracy",
        "Development",
        "Sector of Indian Economy",
        "Money and Credits",
        "Globalization and the Indian Economy",
        "Consumer Rights",
      ],
      file: "/rise-of-nationalism.pdf",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="min-h-full flex items-center justify-center p-4 my-8">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-teal-600 text-center py-10 underline">
            Previous Year Question
          </h1>
          <Accordion items={accordionItems} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
