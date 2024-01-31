import { useNavigate } from 'react-router-dom';
import { createCard } from '../assets/services/Api';
import CreateCardBg from '../components/createcardpage/CreateCardBackground';

function CreatePokemonCards() {
  const nav = useNavigate();

  function createTheCard(event) {
    event.preventDefault();
    const card = { name: event.target.name.value };
    createCard(card).then(() => nav(`/`));
  }

  return (
    <div className="CreateCard">
      <CreateCardBg />
      <h1>Enter Pokemon name</h1>
      <form onSubmit={createTheCard}>
        <input type="text" name="name" id="name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreatePokemonCards;
