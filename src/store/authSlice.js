import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../utils/fetch";
import bcrypt from 'bcryptjs'
import { modifyUser } from "./userSlice";

const initialState = {
  user: (JSON.parse(localStorage.getItem('currentUser')) || {}),
}

export const login = createAsyncThunk(
  'login',
  async (newUser) => {
    const users = await fetchAllUsers()
    const userFound = users.find(user => user.email === newUser.email)

    if (userFound) {
      const hashedPass = bcrypt.hashSync(newUser.pass, userFound.password)

      if (hashedPass === userFound.password) {
        localStorage.setItem('currentUser', JSON.stringify(userFound))
        return userFound
      }
      // error
      console.log('Error pass')
      return {}
    } else {
      // error
      console.log('Error email')
      return {}
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('currentUser')
      state.user = {}
    }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(modifyUser.fulfilled, (state, action) => {
      if (action.payload.newUser.id === state.user.id) {
        state.user = action.payload.newUser
        localStorage.setItem('currentUser', JSON.stringify(action.payload.newUser))
      }
    })
  }
})

export const { logout } = authSlice.actions
export const currentUserSelector = state => state.currentUser.user
export default authSlice.reducer