// Import necessary modules and components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';      // Page showing list of learning support providers
import ProviderDetail from './pages/ProviderDetail';  // Page showing details of a selected provider
import About from './Components/About';               // About page component
import Navbar from './Components/Navbar';             // Top navigation bar

function App() {
  return (
    <>
      {/* Set up routing using React Router */}
      <Router>
        {/* Display Navbar on all routes */}
        <Navbar />

        {/* Define all available routes in the app */}
        <Routes>
          {/* Home route: list of providers */}
          <Route path="/" element={<ProviderList />} />
          
          {/* Dynamic route: shows details for a specific provider based on ID */}
          <Route path="/providers/:id" element={<ProviderDetail />} />

          {/* About page route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
