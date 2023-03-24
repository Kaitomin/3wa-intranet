// TODO: Cette page doit également permettre:
// un affichage avec un système de filtres par
//  .lastname, .city et .category :

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { usersSelector, fetchUsers } from "../store/userSlice";
import { currentUserSelector } from "../store/authSlice";
import { useEffect } from "react";
import CardStyle from "../components/CardStyle";
import { useState } from "react";

export default function Users({ user }) {
  const [searchParams, setSearchParams] = useState({
    searchKey: "",
    city: "",
    category: "",
  });
  // const [city, setCity] = useState();
  // technique Technique Marketing
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const currentUser = useSelector(currentUserSelector);

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  const cities = users.map((user) => user.city);
  const citiesSet = [...new Set(cities)];

  const filterUser =
    // const firstName = user.firstname.toLowerCase();
    users &&
    users.filter((user) => {
      const firstName = user.firstname.toLowerCase();
      const lastName = user.lastname.toLowerCase();
      const city = user.city.toLowerCase();
      const category = user.category.toLowerCase();

      return (
        (
          (firstName.includes(searchParams.searchKey.toLowerCase())) ||
          (lastName.includes(searchParams.searchKey.toLowerCase()))
        ) && (
          city.includes(searchParams.city.toLowerCase())
        ) && (
          category.includes(searchParams.category.toLowerCase())
        )
      )
    })

  useEffect(() => {
    // Get all users if localStorage is empty, only executes once
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, []);

  return (
    <div>
      <span>{searchParams.searchKey}</span>
      <label htmlFor="searchKey">Nom</label>
      <input
        type="text"
        id="searchKey"
        value={searchParams.searchKey}
        onChange={handleChange}
        name="searchKey"
      />
      <label htmlFor="city-select">Ville</label>
      <select
        value={searchParams.city}
        id="city-select"
        name="city"
        onChange={handleChange}
      >
        <option value="">All</option>
        {citiesSet.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label htmlFor="category-select">Categorie</label>
      <select
        value={searchParams.category}
        id="category-select"
        name="category"
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Client">Client</option>
        <option value="Technique">Technique</option>
        <option value="Marketing">Marketing</option>
      </select>

      <div className="card-user">
        {filterUser.length > 0 && (
          <ul>
            {filterUser.map((user) => (
              <li key={user.id}>
                <CardStyle user={user} isAdmin={currentUser.isAdmin} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
