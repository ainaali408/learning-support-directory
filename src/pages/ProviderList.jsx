// Import necessary hooks and components
import { useEffect, useState } from "react";
import { fetchProviders } from "../api/fetchProviders"; // Function to fetch provider data
import SearchBar from "../Components/SearchBar";         // Search input component
import Banner from "../Components/Banner";               // Top banner image
import ProviderCard from "../Components/ProviderCard";   // Individual provider display card

function ProviderList() {
  // State to store all providers fetched from API
  const [providers, setProviders] = useState([]);
  // State to manage user's search input
  const [search, setSearch] = useState("");

  // Fetch provider data on component mount
  useEffect(() => {
    fetchProviders().then(setProviders); // Load data and store in state
  }, []);

  // Filter providers based on search input (by name or specialization)
  const filtered = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Top banner section */}
      <Banner />

      {/* Search bar input */}
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {/* Grid to display provider cards */}
      <div className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {/* Render filtered provider cards */}
        {filtered.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </>
  );
}

export default ProviderList;


  );
}

export default ProviderList;
