import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center relative shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-200">
          Learning Support Providers
        </h1>
      </Link>

      {/* About Section with Hover Info */}
      <div className="relative group">
        {/* Only the button is wrapped in Link */}
        <Link to="/about">
          <button className="text-white font-semibold px-4 py-2 hover:text-blue-200">
            About
          </button>
        </Link>

        {/* Popover on Hover - Do NOT wrap in Link */}
       <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 text-sm shadow-lg p-4 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 z-50">
  <h3 className="font-bold text-blue-700 text-base mb-2 tracking-wide">
    What is a Learning Support Provider?
  </h3>
  <p className="leading-relaxed text-[13.5px]">
    A Learning Support Provider offers individualized guidance for children with learning differences such as ADHD, autism, or dyslexia — empowering both their academic progress and emotional well-being.
  </p>
</div>
      </div>
    </nav>
  );
};

export default Navbar;


