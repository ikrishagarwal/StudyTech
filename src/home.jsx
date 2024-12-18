import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const Home = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-teal-100 flex flex-col mb-0 pb-0">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <section className="bg-teal-100">
          <div className="container mx-auto flex md:flex-row flex-col items-center justify-center grow">
            <div className="container px-6 md:px-20 py-16 text-center md:text-left">
              <span className="bg-white px-4 py-2 rounded-lg text-gray-700 text-sm md:text-base">
                Never stop learning.
              </span>
              <h2 className="text-3xl md:text-5xl leading-snug font-bold text-teal-600 my-4">
                <p>Crack Your Board</p>
                <p>Exams With</p>
                <p>StudyTech</p>
              </h2>
              <span>
                <div className="mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <button className="bg-orange-500 uppercase text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                    <a href="#courses">EXPLORE  Path</a>
                  </button>
                  <span className="bg-white shadow px-6 py-2 rounded-lg text-gray-600">
                    1.5M+ Assisted Students
                  </span>
                </div>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <img src="/sr.png" alt="Sahitya Raj" className="w-[110%]" />
            </div>
          </div>
        </section>
      </section>

      {/* Courses Offered */}
      <section
        id="courses"
        className="container h-full mx-auto px-4 md:px-6 py-8 md:py-16"
      >
        <h3 className="text-3xl font-bold text-teal-600 text-center mb-8 md:mb-12">
          Courses Offered
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Course 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/eklavya.jpg"
              alt="Eklavya Course"
              className="w-full rounded-lg aspect-video object-cover transform scale-x-[-1]"
            />
            <p className="text-gray-600 mt-4">30 Days</p>
            <h4 className="text-xl font-bold uppercase text-teal-600 mt-4">
              Eklavya Course
            </h4>
            <p className="text-gray-600 py-4 text-justify">
              This course provides notes, study materials, and detail analysis,
              ensuring conceptual clarity and exam readiness. With expert
              guidance and structured resources, learners can achieve their
              goals through a supportive and engaging experience.
            </p>
            <p className="text-orange-500 mt-2">
              ₹149 <span className="line-through text-gray-500">₹249</span>
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>

          {/* Course 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/karna.jpg"
              alt="Karna Course"
              className="w-full rounded-lg aspect-video object-cover"
            />
            <p className="text-gray-600 mt-4">30 Days</p>
            <h4 className="text-xl font-bold text-teal-600 uppercase mt-4">
              Karna Course
            </h4>
            <p className="text-gray-600 py-4 text-justify">
              This course offers notes, study materials, mentorship, and
              comprehensive chapter-wise revision. Designed for effective
              learning and exam preparation, it ensures clarity, structured
              guidance, and thorough understanding to help learners achieve
              success.
            </p>
            <p className="text-orange-400 mt-2">
              ₹249 <span className="line-through text-gray-500">₹349</span>
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
          </div>

          {/* Course 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/arjuna.png"
              alt="Arjuna Course"
              className="w-full rounded-lg aspect-video object-cover"
            />
            <p className="text-gray-600 mt-2">30 Days</p>
            <h4 className="text-xl font-bold text-teal-600 mt-4 uppercase">
              Arjuna Course
            </h4>
            <p className="text-gray-600 py-4 text-justify">
              This course provides notes, study materials, mentorship,
              chapter-wise revision, and live doubt-solving sessions. It ensures
              conceptual clarity, personalized guidance, and thorough
              preparation, empowering learners to excel academically and achieve
              their goals.
            </p>
            <p className="text-orange-500 mt-2">
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
              <div className="mb-8 mx-10">
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
              <div className="mb-8 mx-10">
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
              <div className="mb-8 mx-10">
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
                src="/pana.svg"
                alt="StudyTech Illustration"
                className="w-full max-w-lg"
              />
            </div>
            {/* Right Section: Features */}
            <div className="flex-1 space-y-6 flex justify-center flex-col">
              {/* Feature 1 */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full mr-4 px-4">
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
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full mr-4 px-4">
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
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full mr-4 px-4">
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
      <section className="text-white py-12 px-6 md:px-16 rounded-lg relative">
        <div className="container mx-auto bg-[#DF1C25] rounded-2xl px-6 md:px-10 pt-10 md:pt-0 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
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
              <a href="#courses">EXPLORE</a>
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/sru.png"
              alt="StudyTech Benefits"
              className="w-full max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
