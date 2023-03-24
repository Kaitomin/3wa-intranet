import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, userRandomSelector } from "../store/userSlice";
import { currentUserSelector } from "../store/authSlice";
import CardStyle from "../components/CardStyle";
import "../styles/Home.css";

function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const userRandom = useSelector(userRandomSelector);

  const handleClick = () => {
    const userIdRandom = Math.floor(1 + Math.random() * 42);
    dispatch(fetchUserById(userIdRandom));
  };
  return (
    <div className="home-page">
      <h1>
        Bienvenue sur l'intranet
      </h1>
      <p>
        La plate-forme de l'entreprise qui vous permet de retrouver tous vos
        collaborateurs.
      </p>
      <div className="card-home">
        <CardStyle user={currentUser} />
      </div>

      <p>Avez-vous dit bonjour à : </p>

      <br />
      <button className="button-random" onClick={handleClick}>Dire bonjour à quelqu'un d'autre</button>
      { Object.keys(userRandom).length > 0 && <div className="card-home"><CardStyle user={userRandom} /></div> }
    </div>
  );
}

export default Home;
