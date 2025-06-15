import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProviders } from '../api/fetchProviders';
import { FaMapMarkerAlt } from 'react-icons/fa';


const ProviderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProviders().then((data) => {
      const found = data.find((item) => item.id === id);
      setProvider(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading provider details...</div>;
  }

  if (!provider) {
    return <div className="text-red-500 text-center mt-10">Provider not found.</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{provider.name}</h1>
      <p className="text-gray-700">{provider.specialization}</p>
      <p className="text-gray-600 mb-2">{provider.location}</p>
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
       <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(provider.location)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="underline hover:text-blue-600"
>
  {provider.location}
</a>
      </div>
      <p className="mb-4">{provider.longDescription}</p>
      <p><strong>Email:</strong> {provider.contactEmail}</p>
      <p><strong>Phone:</strong> {provider.phoneNumber}</p>
      <button
        onClick={() => {
          setLoading(true); // show loading before going back
          setTimeout(() => navigate('/'), 300); // optional delay to show loader
        }}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to List
      </button>
    </div>
  );
};

export default ProviderDetail;
