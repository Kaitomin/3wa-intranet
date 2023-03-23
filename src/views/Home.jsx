import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector, fetchUserById, userRandomSelector } from "../store/userSlice";
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
      <Typography style={{ color: "white" }} level="h1">
        Bienvenue sur l'intranet
      </Typography>
      <Typography style={{ color: "white" }} level="body1">
        La plate-forme de l'entreprise qui vous permet de retrouver tous vos
        collaborateurs.
      </Typography>
      <CardStyle user={currentUser} />

      <p>Avez-vous dit bonjour à : </p>
      
      <br />
      <Button onClick={handleClick}>Dire bonjour à quelqu'un d'autre</Button>
      { Object.keys(userRandom).length > 0 && <CardStyle user={userRandom} /> }
    </div>
  );
}

export default Home;
