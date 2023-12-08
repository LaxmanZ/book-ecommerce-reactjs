import TitleTypeTwo from '../../UI/titleTypeTwo/TitleTypeTwo';
import { quoteData } from '../../data/Data';
import './quotes.css';

const Quotes = () => {
  return (
    <section className="quote">
      <div className="container quote-container">
        <TitleTypeTwo Title={'Quote Of The Day'} ClassName='quote-title' />

        {quoteData.map((item) => (
          <article key={item.id}>
            <p>{item.quote}</p>
            <h5>{item.speaker}</h5>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
