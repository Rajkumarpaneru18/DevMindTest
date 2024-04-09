import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 justify-between items-center w-screen bg-black text-white text-sm left-0 right-0">
      <hr className="w-full border-gray-400 border-t-2" />
      <div className="mx-auto flex justify-evenly items-center w-full">
        <div className="flex flex-col gap-1 justify-center items-start">
          <div className="text-xl">DevMindTest Web app</div>
          <div className="mt-3 flex text-xl gap-2">
            <FaFacebook className="hover:text-purple-900" />
            <FaInstagram className="hover:text-purple-900" />
            <FaTiktok className="hover:text-purple-900" />
            <FaTwitter className="hover:text-purple-900" />
            <FaLinkedin className="hover:text-purple-900" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">About</h1>
          <div className="hover:text-purple-900">About Us</div>
          <div className="hover:text-purple-900">Features</div>
          <div className="hover:text-purple-900">News</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Account</h1>
          <div className="hover:text-purple-900">Support Center</div>
          <div className="hover:text-purple-900">Feedback</div>
          <div className="hover:text-purple-900">Contact Us</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Company</h1>
          <Link to="/our-team">
            <div className="hover:text-purple-900">Our Team</div>
          </Link>
          <div className="hover:text-purple-900">Partner</div>
          <div className="hover:text-purple-900">FAQ</div>
        </div>
      </div>
      <div className="text-lg">
        &#169; DevMindTest 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
