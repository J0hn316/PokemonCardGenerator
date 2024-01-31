import '../homepage/homepage.css';
import Img from '../../assets/images/PokemonCards.png';

export default function HomeBackground() {
  return (
    <div className="BG">
      <img src={Img} alt="PokemonCard Background" />
    </div>
  );
}
