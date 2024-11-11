import './App.css';
import Resource from './components/Resource';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Faq from './components/Faq';
import About from './components/About';
import FoterBar from './components/FoterBar';
import LeadersBoard from './components/LeadersBoard';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<LeadersBoard />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    <FoterBar/>
    </Router>
    </>
  );
}

export default App;
