import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/notfound/NotFound';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
