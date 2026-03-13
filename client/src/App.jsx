import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Traditions from './pages/Traditions';
import Gallery from './pages/Gallery';
import Guide from './pages/Guide';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/history"    element={<History />} />
        <Route path="/traditions" element={<Traditions />} />
        <Route path="/gallery"    element={<Gallery />} />
        <Route path="/guide"      element={<Guide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
