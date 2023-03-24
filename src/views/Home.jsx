import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, userRandomSelector } from "../store/userSlice";
import { currentUserSelector } from "../store/authSlice";
import CardStyle from "../components/CardStyle";

function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const userRandom = useSelector(userRandomSelector);

  const handleClick = () => {
    const userIdRandom = Math.floor(1 + Math.random() * 42);
    dispatch(fetchUserById(userIdRandom));
  };
  return (
    <div>
      <h1>
        Bienvenue sur l'intranet
      </h1>
      <p style={{ color: "white" }}>
        La plate-forme de l'entreprise qui vous permet de retrouver tous vos
        collaborateurs.
      </p>
      <CardStyle user={currentUser} />

      <p>Avez-vous dit bonjour à : </p>

      <br />
      <button onClick={handleClick}>Dire bonjour à quelqu'un d'autre</button>
      { Object.keys(userRandom).length > 0 && <CardStyle user={userRandom} /> }
    </div>
  );
}

export default Home;
