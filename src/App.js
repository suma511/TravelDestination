import './App.css';
import Home from './Components/Home/Home';
import TourDetails from './Components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
