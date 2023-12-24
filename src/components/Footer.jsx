import Logo from "./Logo";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around bg-gray-900 text-white px-5 py-8">
        <Logo></Logo>
        <div className="flex gap-5">
            <span><FaFacebook className="text-xl"/></span>
            <span><FaGithub className="text-xl"/></span>
            <span><FaTwitter className="text-xl"/></span>
        </div>
      </div>
      <div className="bg-black text-white p-2">
        <p className="text-center text-sm">Shamim Ahammad- &copy;All Copyright reserved</p>
      </div>
    </div>
  );
}

export default Footer;
