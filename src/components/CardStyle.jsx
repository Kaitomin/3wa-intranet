
import React from 'react'
import { deleteUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function CardStyle({ user, isAdmin }) {
  const dispatch = useDispatch()

  const handleC = () => {
    console.log('first')
    dispatch(deleteUser(user.id))
  }

  return (
    <>
      <h2>{user.firstname} {user.lastname}</h2>
      <img src={user.photo} alt="" />
      {/* { isAdmin && <button><Link to={`/edit-user/${user.id}`} state={{ user }}>Editer</Link></button>} */}
      { isAdmin && <button><Link to={`/edit-user/${user.id}`} state={{ id: user.id }}>Editer</Link></button>}
      { isAdmin && <button onClick={handleC}>Supprimer</button>}
    </>
  )
}

export default CardStyle