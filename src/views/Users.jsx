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
import InputAdornment from "@mui/material/InputAdornment";

import { useDispatch, useSelector } from "react-redux";
import { usersSelector, fetchUsers } from "../store/userSlice";
import { currentUserSelector } from "../store/authSlice";
import { useEffect } from "react";
import CardStyle from "../components/CardStyle";
import { useState } from "react";

export default function Users({ user }) {

  const [searchParams, setSearchParams] = useState({searchKey: "", city: "", category: ""});
  // const [city, setCity] = useState();
  // technique Technique Marketing
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const currentUser = useSelector(currentUserSelector);
  
  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name] : e.target.value
    });
  }

  const cities = users.map(user => user.city);
  const citiesSet = [...new Set(cities)];


  const filterUser = (
    // const firstName = user.firstname.toLowerCase();
    users && users.filter(user => {
      const firstName = user.firstname.toLowerCase();
      const lastName = user.lastname.toLowerCase();
      const city  = user.city.toLowerCase();
      const category  = user.category.toLowerCase();

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
  )

  useEffect(() => {
    // Get all users if localStorage is empty, only executes once
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, []);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, width: 120 }}>
      <span>
        {searchParams.searchKey}
      </span>
      <TextField
        id="input-with-icon-textfield"
        label="Prénom Nom"
        value={searchParams.searchKey}
        onChange={handleChange}
        name="searchKey"
        variant="standard"
      />
        <FormControl fullWidth>
            <span>{searchParams.city}</span>
            <InputLabel>Ville</InputLabel>
            <Select
              value={searchParams.city}
              label="City"
              name="city"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>       
              {citiesSet.map(city => 
                <MenuItem key={city} value={city}>{city}</MenuItem>  
              )}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
            <Select
              value={searchParams.category}
              label="Catégorie"
              name="category"
              onChange={handleChange}
            >
              <MenuItem value="Client">Client</MenuItem>
              <MenuItem value="Technique">Technique</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
            </Select>
          </FormControl>

      {filterUser.length > 0 && (
        <ul>
          {filterUser.map((user) => (
            <li key={user.id}>
              <CardStyle user={user} isAdmin={currentUser.isAdmin}/>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}
