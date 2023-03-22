import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../store/userSlice";
function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const { userRandom } = useSelector((state) => state.users);
  console.log("userRandom", userRandom);

  const handleClick = () => {
    const userIdRandom = Math.floor(Math.random() * 41 + 1);
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
      <p>Avez-vous dit bonjour à : </p>
      {
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            gap: 2,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 100 }}>
            <img
              src={userRandom.photo}
              // srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
              loading="lazy"
              alt="photo"
            />
          </AspectRatio>
          <div>
            <Chip>{userRandom.category}</Chip>
            <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
              {userRandom.firstname} {userRandom.lastname} ({Math.floor((new Date() - new Date(userRandom.birthdate).getTime()) / 3.15576e+10)})
            </Typography>
            <Typography
              fontSize="sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                {userRandom.city} {userRandom.country}
              </Link>
            </Typography>
            <Typography>
              {userRandom.email}
            </Typography>
            <Typography>
              {userRandom.phone}
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Anniversaire : {userRandom.birthdate}
            </Chip>
          </div>
        </Card>
        // <span style={{ listSyle: "none"}} key={userRandom.id}>
        //   {userRandom.firstname}, {userRandom.lastname}
        // </span>
      }
      <br />
      <Button onClick={handleClick}>dire bonjour à quelqu'un d'autre</Button>

      <div>
        {" "}
        <br />
      </div>
    </div>
  );
}

export default Home;
