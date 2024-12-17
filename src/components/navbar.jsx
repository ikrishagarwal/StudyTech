import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <header className="bg-teal-100 shadow px-10 py-5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600">StudyTech</h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className={
              "text-gray-700 hover:text-teal-600" +
              (active === "/"
                ? " font-bold border-b-2 border-b-orange-400"
                : "")
            }
          >
            Home
          </Link>
          <Link
            to="/try"
            className={
              "text-gray-700 hover:text-teal-600" +
              (active === "/try"
                ? " font-bold border-b-2 border-b-orange-400"
                : "")
            }
          >
            Try
          </Link>
        </nav>
      </div>
    </header>
  );
};
