import { ReactComponent as MainImage } from 'assets/images/car-header 2.svg';
import Navbar from 'components/Navbar';

import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />
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
        <ButtonIcon />
        <p id="text">Comece agora a navegar</p>
      </div>
    </>
  );
};

export default Home;
