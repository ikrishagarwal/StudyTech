import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8 px-4 lg:px-16">
        {/* About Us */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 mb-8">
          We are a team of passionate developers who are trying to make learning
          easier for students. We provide free study materials for students
          which they can use to study and learn new things. We have a wide range
          of subjects and topics that students can choose from. We are
          constantly updating our study materials to provide the best content to
          our users.
        </p>

        {/* Special Thanks Section */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Special thanks to (Web Team):
        </h1>
        <ul className="list-disc ml-6 space-y-4 text-gray-800">
          {/* Ashutosh Sharma */}
          <li>
            Ashutosh Sharma
            <ul className="list-none ml-6 space-y-2 text-sm text-blue-600">
              <li>
                <a
                  href="https://www.instagram.com/sharmashutosh01/profilecard/?igsh=MXNkeTd5dDFnYm5mag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashutosh-kumar-3624b332a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ashutosh9470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </li>

          {/* Krish Agarwal */}
          <li>
            Krish Agarwal
            <ul className="list-none ml-6 space-y-2 text-sm text-blue-600">
              <li>
                <a
                  href="https://www.instagram.com/coffee.to.code.machine/profilecard/?igsh=cG53cnFmYjN2c3o4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ikrishagarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ikrishagarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </li>

          {/* Aayush Arya */}
          <li>
            Aayush Arya
            <ul className="list-none ml-6 space-y-2 text-sm text-blue-600">
              <li>
                <a
                  href="https://www.instagram.com/aayusharya_i_am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aayusharyaiam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AayushArya28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
