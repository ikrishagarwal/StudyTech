import React from "react";

const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600">StudyTech</h1>
          <nav className="space-x-4">
            <a href="#home" className="text-gray-700 hover:text-teal-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600">About Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-100">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-teal-600">
            Crack Your Board Exams With StudyTech
          </h2>
          <p className="text-gray-700 mt-4">Never stop learning.</p>
          <div className="mt-6 space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Explore Path
            </button>
            <span className="bg-white shadow px-6 py-2 rounded-lg text-gray-600">
              1.5M+ Assisted Students
            </span>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-teal-600 text-center mb-12">Courses Offered</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/path-to-image.jpg" alt="Eklavya Course" className="w-full rounded-lg" />
            <h4 className="text-xl font-bold text-teal-600 mt-4">Eklavya Course</h4>
            <p className="text-gray-600 mt-2">30 Days | 30 Students</p>
            <p className="text-gray-700 mt-2">₹149 <span className="line-through text-gray-500">₹249</span></p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>

          {/* Course 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/path-to-image.jpg" alt="Karna Course" className="w-full rounded-lg" />
            <h4 className="text-xl font-bold text-teal-600 mt-4">Karna Course</h4>
            <p className="text-gray-600 mt-2">20 Days | 20 Students</p>
            <p className="text-gray-700 mt-2">₹249 <span className="line-through text-gray-500">₹349</span></p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>

          {/* Course 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/path-to-image.jpg" alt="Arjuna Course" className="w-full rounded-lg" />
            <h4 className="text-xl font-bold text-teal-600 mt-4">Arjuna Course</h4>
            <p className="text-gray-600 mt-2">40 Days | 40 Students</p>
            <p className="text-gray-700 mt-2">₹349 <span className="line-through text-gray-500">₹449</span></p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-teal-600 mb-6">Benefits of StudyTech</h3>
          <p className="text-gray-700">Access to detailed notes, personalized mentorship, and live doubt-solving sessions.</p>
          <button className="bg-teal-600 text-white px-6 py-2 mt-6 rounded-lg hover:bg-teal-700">
            Buy Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-6">
        <div className="container mx-auto text-center">
          <p>StudyTech © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
