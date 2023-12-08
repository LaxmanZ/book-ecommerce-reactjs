import { Link } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container notfound-container">
        <h1>404</h1>
        <h3>Opps, This Page Not Found</h3>
        <Link to={'/'} className="btn btn-border">
          Go To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
