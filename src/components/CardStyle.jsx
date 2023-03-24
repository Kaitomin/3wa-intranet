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
        <span className="card-content-category">{user.category}</span>
        <p style={{ fontWeight: "bold" }}>
          {user.firstname} {user.lastname}
          <span>
            (
            {Math.floor(
              (new Date() - new Date(user.birthdate).getTime()) / 3.15576e10
            )}
            )
          </span>
        </p>
        <p>
          {user.city} {user.country}
        </p>
        <p style={{ marginLeft: "42px" }}>📧{user.email}</p>
        <p style={{ marginLeft: "46px" }}>
          <i className="fa-solid fa-phone"></i>
          {user.phone}
        </p>
        <p style={{ marginLeft: "42px" }}>🎂Anniversaire : {user.birthdate}</p>
        <div>
          <hr className="rounded" />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {isAdmin && (
            <button className="card-button-edit">
              <Link to={`/edit-user/${user.id}`} state={{ id: user.id }}>
                Editer
              </Link>
            </button>
          )}
          {isAdmin && (
            <button className="card-button-delete" onClick={() => dispatch(deleteUser(user.id))}>
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardStyle;
