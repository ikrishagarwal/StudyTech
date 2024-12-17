import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const Home = () => {
  return (
    <div className="bg-gray-50">
      <section className="h-screen bg-teal-100 flex flex-col">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <section className="bg-teal-100">
          <div className="container mx-auto flex items-center justify-center grow">
            <div className="container px-6 md:px-20 py-16 text-center md:text-left">
              <span className="bg-white px-4 py-2 rounded-lg text-gray-700 text-sm md:text-base">
                Never stop learning.
              </span>
              <h2 className="text-3xl md:text-5xl leading-snug font-bold text-teal-600 my-4">
                <p>Crack Your Board</p>
                <p>Exams With</p>
                <p>StudyTech</p>
              </h2>
              <div className="mt-6 space-y-4 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
                <button className="bg-orange-500 uppercase text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                  Explore Path
                </button>
                <span className="bg-white shadow px-6 py-2 rounded-lg text-gray-600">
                  1.5M+ Assisted Students
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Courses Offered */}
      <section className="container h-full mx-auto px-4 md:px-6 py-8 md:py-16">
        <h3 className="text-3xl font-bold text-teal-600 text-center mb-8 md:mb-12">
          Courses Offered
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Course 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/path-to-image.jpg"
              alt="Eklavya Course"
              className="w-full rounded-lg"
            />
            <h4 className="text-xl font-bold text-teal-600 mt-4">
              Eklavya Course
            </h4>
            <p className="text-gray-600 mt-2">30 Days</p>
            <p className="text-gray-700 mt-2">
              ₹149 <span className="line-through text-gray-500">₹249</span>
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>

          {/* Course 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/path-to-image.jpg"
              alt="Karna Course"
              className="w-full rounded-lg"
            />
            <h4 className="text-xl font-bold text-teal-600 mt-4">
              Karna Course
            </h4>
            <p className="text-gray-600 mt-2">30 Days</p>
            <p className="text-gray-700 mt-2">
              ₹249 <span className="line-through text-gray-500">₹349</span>
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>

          {/* Course 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/path-to-image.jpg"
              alt="Arjuna Course"
              className="w-full rounded-lg"
            />
            <h4 className="text-xl font-bold text-teal-600 mt-4">
              Arjuna Course
            </h4>
            <p className="text-gray-600 mt-2">30 Days</p>
            <p className="text-gray-700 mt-2">
              ₹349 <span className="line-through text-gray-500">₹449</span>
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="text-white py-12 px-6 md:px-16 rounded-lg relative">
        <div className="container mx-auto bg-red-600 rounded-2xl px-6 md:px-10 py-10 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              BENEFITS OF STUDYTECH
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center justify-center lg:justify-start">
                <span className="text-white bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ⭐
                </span>
                Access to detailed notes and study materials.
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <span className="text-white bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ⭐
                </span>
                Personalized mentorship for guided learning.
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <span className="text-white bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ⭐
                </span>
                Live doubt-solving sessions for clarity.
              </li>
            </ul>
            <button className="mt-6 bg-white text-red-600 font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-200">
              BUY NOW
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/tw.png"
              alt="StudyTech Benefits"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};