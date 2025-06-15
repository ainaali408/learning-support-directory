// Import React and necessary hooks
import React, { useEffect, useState } from "react";
// Import routing hooks to get URL params and navigate programmatically
import { useParams, useNavigate } from "react-router-dom";
// Import the function to fetch mock provider data
import { fetchProviders } from "../api/fetchProviders";
// Import map icon
import { FaMapMarkerAlt } from "react-icons/fa";

const ProviderDetail = () => {
  const { id } = useParams(); // Get the dynamic provider ID from URL
  const navigate = useNavigate(); // Hook to navigate between pages
  const [provider, setProvider] = useState(null); // State to hold selected provider
  const [loading, setLoading] = useState(true); // State for loading status

  // Fetch provider data on component mount or when ID changes
  useEffect(() => {
    setLoading(true); // Start loading
    fetchProviders().then((data) => {
      // Find the provider matching the URL ID
      const found = data.find((item) => item.id === id);
      setProvider(found); // Set the matched provider
      setLoading(false);  // End loading
    });
  }, [id]);

  // Display loading message while data is being fetched
  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold">
        Loading provider details...
      </div>
    );
  }

  // Display error if no provider is found with the given ID
  if (!provider) {
    return (
      <div className="text-red-500 text-center mt-10">Provider not found.</div>
    );
  }

  // Render provider details
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{provider.name}</h1>
      <p className="text-gray-700">{provider.specialization}</p>
      <p className="text-gray-600 mb-2">{provider.location}</p>

      {/* Google Maps link for location */}
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            provider.location
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          {provider.location}
        </a>
      </div>

      {/* Long description */}
      <p className="mb-4">{provider.longDescription}</p>

      {/* Contact information */}
      <p>
        <strong>Email:</strong> {provider.contactEmail}
      </p>
      <p>
        <strong>Phone:</strong> {provider.phoneNumber}
      </p>

      {/* Back button to return to provider list */}
      <button
        onClick={() => {
          setLoading(true); // Optionally show loading before navigating
          setTimeout(() => navigate("/"), 300); // Go back to list after small delay
        }}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to List
      </button>
    </div>
  );
};

export default ProviderDetail;
