import BestSellingBook from '../components/bestSellingBook/BestSellingBook';
import Brands from '../components/brands/Brands';
import FeaturesBooks from '../components/features/FeaturesBook';
import Header from '../components/header/Header';
import PopularBooks from '../components/popularBooks/PopularBooks';
import Quotes from '../components/quotes/Quotes';

const Home = () => {
  return (
    <>
      <Header />
      <Brands />
      <FeaturesBooks />
      <BestSellingBook />
      <PopularBooks />
      <Quotes />
    </>
  );
};

export default Home;
