import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditPokemonCard from './pages/EditPokemonCard';
import CreatePokemonCards from './pages/CreatePokemonCards';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar /> <Home />
            </>
          }
        />
        <Route
          path="/cards/create"
          element={
            <>
              <NavBar /> <CreatePokemonCards />
            </>
          }
        />
        <Route
          path="/cards/edit/:id"
          element={
            <>
              <NavBar /> <EditPokemonCard />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
