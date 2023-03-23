import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import React from 'react'

function CardStyle({ user, isAdmin }) {
  return (
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
        src={user.photo}
        // srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
        loading="lazy"
        alt="photo"
      />
    </AspectRatio>
    <div>
      <Chip>{user.category}</Chip>
      <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
        {user.firstname} {user.lastname} ({Math.floor((new Date() - new Date(user.birthdate).getTime()) / 3.15576e+10)})
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
          {user.city} {user.country}
        </Link>
      </Typography>
      <Typography>
        {user.email}
      </Typography>
      <Typography>
        {user.phone}
      </Typography>
      <Chip
        variant="outlined"
        color="primary"
        size="sm"
        sx={{ pointerEvents: "none" }}
      >
        Anniversaire : {user.birthdate}
      </Chip>
      { isAdmin && <button>éditer</button>}
      { isAdmin && <button>Supprimer</button>}
    </div>
  </Card>
  )
}

export default CardStyle