import { ReactComponent as MainImage } from 'assets/images/car-header 2.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>

      <div className="button-and-text">
        <Link to="/cars">
          <ButtonIcon />
        </Link>
        <p id="text">Comece agora a navegar</p>
      </div>
    </>
  );
};

export default Home;
