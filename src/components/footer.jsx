export const Footer = () => {
  return (
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
              <span className="mr-2">📧</span> <a href="mailto:info@onlearn.com">Email: info@onlearn.com</a>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Links</h3>
            <ul className="text-teal-600 space-y-1">
              <li>
                <a href="https://www.youtube.com/@sahityarajsingh" target="_blank" className="hover:underline">
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
  );
};
