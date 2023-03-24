import { Link } from "react-router-dom";
import React from "react";

function CardStyle({ user, isAdmin }) {
  return (
    <div className="card">
      <div>
        <img className="card-img"
          src={user.photo}
          alt="photo"
        />
      </div>
      <div className="card-content">
        <span style={{backgroundColor: "#FFC0CB"}}>{user.category}</span>
        <p>
          {user.firstname} {user.lastname} (
          {Math.floor(
            (new Date() - new Date(user.birthdate).getTime()) / 3.15576e10
          )}
          )
        </p>
        <p>
          {user.city} {user.country}
        </p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <div className="card-content">Anniversaire : {user.birthdate}</div>
        <hr class="rounded" />
        <br />
        <div style={{textAlign: "center"}}>
          {isAdmin && <button style={{backgroundColor: ""}}>éditer</button>}
          {isAdmin && <button>supprimer</button>}
        </div>
      </div>
    </div>
  );
}

export default CardStyle;
