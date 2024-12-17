export const Navbar = () => {
  return (
    <header className="bg-teal-100 shadow px-10 py-5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600">StudyTech</h1>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-teal-600">
            Home
          </a>
          <a href="#try" className="text-gray-700 hover:text-teal-600">
            Try
          </a>
        </nav>
      </div>
    </header>
  );
};
