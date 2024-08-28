import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black border flex  border-gray-300 border-opacity-25 p-2 text-white justify-between ">
      <div className="flex flex-row gap-2">
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  flex flex-row gap-2"
        >
          <h1 className="text-sm">Made using</h1>
          <SiThemoviedatabase size={24} className="hover:text-yellow-500" />
        </a>
      </div>

      <div className="flex flex-row gap-2">
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
