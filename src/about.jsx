import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8 px-4 lg:px-16">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700">
          We are a team of passionate developers who are trying to make learning
          easier for students. We provide free study materials for students
          which they can use to study and learn new things. We have a wide range
          of subjects and topics that students can choose from. We are
          constantly updating our study materials to provide the best content to
          our users.
        </p>
        <h1>Special thanks to</h1>
        <ul>
          <li>Sahitya Raj</li>
          <li>Ashutosh Sharma</li>
          <li>Krish Agarwal</li>
          <li>Aayush Arya (ChatGPT)</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
