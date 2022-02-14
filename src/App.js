import './App.css';
import Home from './Components/Home/Home';
import TourDetails from './Components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>

    </>
  );
}

export default App;
