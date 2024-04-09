import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black w-screen h-32 border-b-2 border-gray-300 flex justify-between items-center px-8 py-4">
      <div>
        <h1 className="text-4xl font-bold text-center">
          <span className="text-blue-500">Dev</span>
          <span className="text-red-500">Mind</span>
          <span className="text-green-500">Test</span>
        </h1>
      </div>

      {/* Navigation section */}
      <div className="flex flex-grow justify-center">
        <ul className="flex gap-10">
          <li className="text-white hover:text-purple-700 cursor-pointer">
            <Link to="/Hero-section" className="block">
              Home
            </Link>
          </li>
          <li className="text-white hover:text-purple-700 cursor-pointer">
            Features
          </li>
          <li className="text-white hover:text-purple-700 cursor-pointer">
            <Link to="/ContactUs" className="block">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <Link to="/mainpage">
        <button className="bg-white text-black text-xl px-3 py-2 rounded-2xl hover:bg-violet-400 -mx-96">
          Get Started
        </button>
      </Link>
    </header>
  );
};

export default Header;
