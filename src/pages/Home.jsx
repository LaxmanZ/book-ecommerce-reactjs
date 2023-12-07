import BestSellingBook from '../components/bestSellingBook/BestSellingBook';
import Brands from '../components/brands/Brands';
import FeaturesBooks from '../components/features/FeaturesBook';
import Header from '../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Brands />
      <FeaturesBooks />
      <BestSellingBook />
    </>
  );
};

export default Home;
