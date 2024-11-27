
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './navbar/home';
import Product from './navbar/product';
import Features from './navbar/Features';
import Team from './navbar/Team';
import Login from './navbar/Login';
import Footer from './Footer/Footer';
import Comapny from './navbar/Company';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<Comapny />}/>
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;





