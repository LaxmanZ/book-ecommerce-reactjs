import victor from '../../assets/victor.png';
import './titleTypeTwo.css';

const TitleTypeTwo = ({ ClassName, Title }) => {
  return (
    <div className={`titleTypeTwo ${ClassName}`}>
      <h2>{Title}</h2>
      <img src={victor} alt="victor image" className="victor" />
    </div>
  );
};

export default TitleTypeTwo;
