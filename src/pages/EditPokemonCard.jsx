import { getCard, editCard, deleteCard } from '../assets/services/Api';
import EditCardBG from '../components/editcardpage/EditCardBG';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditPokemonCard() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getCard(id).then((res) => setCard(res.data, res.data.img));
  }, []);

  function editTheCard(e) {
    e.preventDefault();
    const updateCard = { name: e.target.name.value, img: e.target.img };
    editCard(id, updateCard).then(() => nav(`/`));
  }

  function deleteTheCard(e) {
    e.preventDefault();
    deleteCard(id).then(() => nav('/'));
  }

  return (
    <div>
      <EditCardBG />
      <h1>Edit Card Page</h1>
      <div className="EditPage">
        <form onSubmit={editTheCard}>
          Name:{' '}
          <input type="text" name="name" placeholder="Enter new pokemon name" />
          <input type="submit" value="Change Pokemon" />
          <button onClick={deleteTheCard}>Delete Card</button>
          <div className="EditCard">
            <img className="pokemon" src={card.img + '.jpg'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPokemonCard;
