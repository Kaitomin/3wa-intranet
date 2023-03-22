import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: {}
}

const fetchAllUsers = async () => {
  const res = await fetch('../data/users.json')
  const data = await res.json()
  return data
}

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async () => {
    const res = await fetchAllUsers()
    return res
  }
)

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
        // localStorage.setItem('currentUser', JSON.stringify(userFound))
        return userFound
      }
      // error
      console.log('Error pass')
    } else {
      // error
      console.log('Error email')
    }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.users = action.payload
    })
    builder.addCase(login.fulfilled, (state, action) => {
      // console.log('log', action.payload)
      state.currentUser = action.payload
    })
  }
})

export default userSlice.reducer