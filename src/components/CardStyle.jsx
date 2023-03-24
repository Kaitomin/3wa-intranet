import React from "react";
import { deleteUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/CardStyle.css";
function CardStyle({ user, isAdmin }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div>
        <img className="card-img" src={user.photo} alt="photo" />
      </div>
      <div className="card-content">
        <span style={{ backgroundColor: "#FFC0CB" }}>{user.category}</span>
        <div style={{fontWeight: "900"}}>
          {user.firstname} {user.lastname}
            (
              {Math.floor(
                (new Date() - new Date(user.birthdate).getTime()) / 3.15576e10
              )}
            )
        </div>
        <p>
          {user.city} {user.country}
        </p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>Anniversaire : {user.birthdate}</p>
        <div>
          <hr className="rounded" />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {isAdmin && (
            <button>
              <Link to={`/edit-user/${user.id}`} state={{ id: user.id }}>
                Editer
              </Link>
            </button>
          )}
          {isAdmin && (
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardStyle;
