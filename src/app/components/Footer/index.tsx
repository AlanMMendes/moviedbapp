import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border border-gray-300 border-opacity-25 text-white py-4 ">
      <div className="container mx-auto flex justify-center items-center gap-2">
        <a
          href="https://www.linkedin.com/in/alan-mazeto-mendes-282751208/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/AlanMMendes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
