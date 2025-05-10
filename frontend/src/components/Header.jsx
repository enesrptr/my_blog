import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Left */}
        <Link to="/" className="text-2xl font-bold">
          MyBlog
        </Link>

        {/* Search */}
        <div className="bg-white w-full md:w-1/2 rounded-full">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-2 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Navigation */}
        <nav className="space-x-4 text-sm font-medium text-white">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          <Link to="/login" className="hover:text-blue-200">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
