import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from '@mui/joy/Button';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur l'intranet</h1>
      <p>
        La plate-forme de l'entreprise qui vous permet de retrouver tous vos
        collaborateurs.
      </p>
      <p>Avez-vous dit bonjour à : </p>
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
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            Yosemite Park
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              California, USA
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            Cool weather all day long
          </Chip>
        </div>
      </Card>
      <div> <br />
        <Button>dire bonjour à quelqu'un d'autre</Button>
      </div>
    </div>
  );
}

export default Home;
