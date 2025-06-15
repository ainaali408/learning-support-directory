import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import ProviderDetail from './pages/ProviderDetail';
import About from './Components/About';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>

    <Router>
    <Navbar/>

      <Routes>
        <Route path="/" element={<ProviderList />} />
        <Route path="/providers/:id" element={<ProviderDetail />} />
        <Route path = "/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

