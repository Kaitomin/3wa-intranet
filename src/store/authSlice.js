import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../utils/fetch";

const initialState = {
  user: (JSON.parse(localStorage.getItem('currentUser')) || {}),
}

// To do
export const login = createAsyncThunk(
  'login',
  async (newUser) => {
    const users = await fetchAllUsers()
    // console.log(users)

    const userFound = users.find(user => user.email === newUser.email)
    // console.log('userFound', userFound)

    if (userFound) {
      const pwd = userFound.email.split('@')[0]
      if (pwd === newUser.pass) {
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
  }
})

export const { logout } = authSlice.actions
export const currentUserSelector = state => state.currentUser.user
export default authSlice.reducer