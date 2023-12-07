import { brandsData } from '../../data/Data';

import './brands.css';

const Brands = () => {
  return (
    <div className="brands">
      <div className="container brands-container">
        {brandsData.map((item) => (
          <div className="brand" key={item.id}>
            <img src={item.img} alt="brands image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
