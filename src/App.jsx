
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './navbar/home';
import Product from './navbar/Product';
import Features from './navbar/Features';
import Team from './navbar/Team';
import Login from './navbar/Login';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/features" element={<Features />} />
      <Route path="/team" element={<Team />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;





