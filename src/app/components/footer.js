import { SiLinktree } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-6 left-2 p-6 space-x-1 text-2xl md:text-4xl">
      <a
        href="https://linktr.ee/var_mdz"
        target="_blank"
        className="hover:text-white text-lime-500"
      >
      <SiLinktree />
      </a>
      <a
        href="https://t.me/+rHb-8eZz7hJmODQx"
        target="_blank"
        className="hover:text-white text-lime-500"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://www.instagram.com/mdzvar/"
        target="_blank"
        className="hover:text-white text-lime-500"
      >
        <FaInstagram  />
      </a>
    </div>
  );
};

export default Footer;
