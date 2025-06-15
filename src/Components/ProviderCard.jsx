import { Link } from "react-router-dom";

const ProviderCard = ({ provider }) => {
  return (
    <div className="relative z-10 w-full max-w-xs">
      {/* Arrow icon above the card */}
      <Link
        to={`/providers/${provider.id}`}
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition z-20"
        title="View Details"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>

      {/* Card content */}
      <Link
        to={`/providers/${provider.id}`}
        className="block h-64 p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition duration-300 relative z-10"
      >
        <h2 className="text-lg font-semibold text-blue-800 mb-2 truncate">
          {provider.name}
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Specialization:</span>{" "}
          {provider.specialization}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Location:</span>{" "}
          {provider.location}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Rating:</span> {provider.rating} / 5
        </p>
      </Link>
    </div>
  );
};

export default ProviderCard;
