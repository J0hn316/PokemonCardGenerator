import HomeBackground from '../components/homepage/HomeBackground';
import { useEffect, useState } from 'react';
import { getCards } from '../assets/services/Api';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [cards, setCards] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    getCards().then((res) => setCards(res.data));
  }, []);

  return (
    <div className="Home">
      <HomeBackground />
      <h1>Welcome to HomePage</h1>
      <ul className="container">
        {cards.map((card) => {
          return (
            <div key={card.card}>
              <div className="pokeimg">
                <h3>{`${card?.name}`}</h3>
                <img src={card.img + '.jpg'} />
                <button
                  onClick={() => {
                    nav(`/cards/edit/${card._id}`);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
