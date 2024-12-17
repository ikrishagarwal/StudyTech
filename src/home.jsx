import { Navbar } from "./components/navbar";

export const Home = () => {
  return (
    <div className="bg-gray-50">
      <section className="h-screen bg-teal-100 flex flex-col">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}

        <section className="bg-teal-100">
          <div className="container mx-auto flex items-center justify-center grow">
            <div className="container px-20 py-16">
              <span className="bg-white px-6 py-2 rounded-lg text-gray-700">
                Never stop learning.
              </span>
              <h2 className="text-5xl leading-tight font-bold text-teal-600 my-4">
                <p>Crack Your Board</p>
                <p>Exams With</p>
                <p>StudyTech</p>
              </h2>
              <div className="mt-6 space-x-4">
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
      <section className="container h-full mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-teal-600 text-center mb-12">
          Courses Offered
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
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
      <section>
        <div className="bg-white min-h-screen">
          {/* Courses Category Section */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto text-center">
              {/* Section Title */}
              <h2 className="text-4xl font-semibold text-teal-800 mb-4">
                Courses Category
                <span className="block w-20 h-1 bg-orange-400 mx-auto mt-2"></span>
              </h2>
              <p className="text-gray-600 mb-8">
                StudyTech is one powerful online software suite that combines
                all the tools needed to crack board exam.
              </p>

              {/* ARJUNA COURSE */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-teal-600">
                  ARJUNA COURSE
                </h3>
                <ul className="mt-4 text-gray-700 text-left inline-block">
                  <li>1. ALL CHAPTER NOTES [SHORT NOTES FOR REVISION]</li>
                  <li>2. IMPORTANT QUESTION FOR PRACTICE [1,2,3 MARKS MCQ]</li>
                  <li>
                    3. ALL CHAPTER PYQ WITH DETAILED ANALYSIS AND IMPORTANT
                    TOPICS OF ALL CHAPTER
                  </li>
                  <li>4. REVISION SERIES OF 50 DAYS PLAN WITH INTERACTION.</li>
                  <li>
                    5. DOUBT SOLVING SESSION AND INTERACTION WITH ALL MENTORS
                    [ON CALL, MESSAGES]
                  </li>
                  <li>
                    6. ZOOM SESSION WITH MENTORS FOR REVISION AND INTERACTION.
                  </li>
                </ul>
              </div>

              {/* KARNA COURSE */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-teal-600">
                  KARNA COURSE
                </h3>
                <ul className="mt-4 text-gray-700 text-left inline-block">
                  <li>1. ALL CHAPTER NOTES [SHORT NOTES FOR REVISION]</li>
                  <li>2. IMPORTANT QUESTION FOR PRACTICE [1,2,3 MARKS MCQ]</li>
                  <li>
                    3. ALL CHAPTER PYQ WITH DETAILED ANALYSIS AND IMPORTANT
                    TOPICS OF ALL CHAPTER
                  </li>
                  <li>
                    4. REVISION SERIES OF 50 DAYS PLAN WITH INTERACTION [CHATS]
                  </li>
                  <li>
                    5. DOUBT SOLVING SESSION AND INTERACTION WITH ALL MENTORS
                  </li>
                </ul>
              </div>

              {/* EKLAVYA COURSE */}
              <div>
                <h3 className="text-3xl font-bold text-teal-600">
                  EKLAVYA COURSE
                </h3>
                <ul className="mt-4 text-gray-700 text-left inline-block">
                  <li>1. ALL CHAPTER NOTES [SHORT NOTES FOR REVISION]</li>
                  <li>2. IMPORTANT QUESTION FOR PRACTICE [1,2,3 MARKS MCQ]</li>
                  <li>3. ALL CHAPTER PYQ WITH DETAILED ANALYSIS</li>
                  <li>4. ALL CHAPTER IMPORTANT TOPICS</li>
                  <li>5. REVISION SERIES OF 50 DAYS PLAN.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-white p-8 lg:p-16">
        <div className="container mx-auto">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-8">
            WHY STUDYTECH?
          </h2>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Illustration */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image URL or import
                alt="StudyTech Illustration"
                className="w-full max-w-lg"
              />
            </div>

            {/* Right Section: Features */}
            <div className="flex-1 space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full mr-4">
                  📘 {/* Replace with actual icon */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Comprehensive Support
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Get access to detailed notes, study materials, and
                    chapter-wise revisions to ensure a deep understanding of
                    every topic.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full mr-4">
                  🎓 {/* Replace with actual icon */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Benefit from personalized mentorship and live doubt-solving
                    sessions to clarify concepts and stay on track.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full mr-4">
                  📝 {/* Replace with actual icon */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Exam Readiness
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Structured learning and focused preparation tools help you
                    excel in exams and achieve your academic goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-red-600 text-white py-12 px-8 lg:px-16 rounded-lg relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              BENEFITS OF STUDYTECH
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ⭐
                </span>
                Access to detailed notes and study materials.
              </li>
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ⭐
                </span>
                Personalized mentorship for guided learning.
              </li>
              <li className="flex items-center">
                <span className="text-white bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ⭐
                </span>
                Live doubt-solving sessions for clarity.
              </li>
            </ul>
            {/* Button */}
            <button className="mt-6 bg-white text-red-600 font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-200">
              BUY NOW
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 flex justify-end">
            <img
              src="https://via.placeholder.com/400" // Replace this with your actual image path
              alt="StudyTech Benefits"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-100 py-8 px-4 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              StudyTech
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">📞</span> Tel: +9229341037
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span> Response hours: 8 to 24 Hours
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> Email: info@onlearn.com
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="flex space-x-16">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Courses
              </h3>
              <ul className="text-teal-600 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Arjuna Course
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Karma Course
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Eklavya Course
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Links
              </h3>
              <ul className="text-teal-600 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start">
            <p className="text-gray-700 mb-2">
              Stay up to date with the latest courses
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-r-md hover:bg-teal-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};
