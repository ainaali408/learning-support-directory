import { useEffect, useState } from 'react';
import { fetchProviders } from '../api/fetchProviders';
import SearchBar from '../Components/SearchBar';
import Banner from '../Components/Banner';
import ProviderCard from '../Components/ProviderCard';



function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProviders().then(setProviders);
  }, []);

  const filtered = providers.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <Banner/>


      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

  <div className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
  {filtered.map((provider) => (
  <ProviderCard key={provider.id} provider={provider} />
  ))}
</div>


    </>


  );
}

export default ProviderList;
