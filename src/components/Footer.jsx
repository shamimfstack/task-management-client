import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around bg-gray-900 text-white px-5 py-8">
        <Logo></Logo>
        <div className="flex gap-5">
          <Link to="https://www.facebook.com/">
            <FaFacebook className="text-xl" />
          </Link>
          <Link to="https://github.com/shamimfstack">
            <FaGithub className="text-xl" />
          </Link>
          <Link to="https://twitter.com/home">
            <FaTwitter className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="bg-black text-white p-2">
        <p className="text-center text-sm">
          Shamim Ahammad- &copy;All Copyright reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
