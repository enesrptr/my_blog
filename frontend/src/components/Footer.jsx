import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-300 py-4 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-600">
          © 2025 enesrptr’a aittir.
        </p>

        {/* Right */}
        <div className="flex gap-4 text-gray-700 text-xl">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="https://x.com/enesrptr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaXTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
