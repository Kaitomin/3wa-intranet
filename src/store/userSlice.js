import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: (JSON.parse(localStorage.getItem('currentUser')) || {}),
  userRandom: {},
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
      return res;
  }
)

export const fetchUserById = createAsyncThunk(
  'fetchUserById',
  async(userId) => {
    const usersList = await fetchAllUsers();
    const userFilter = usersList.find(user => user.id == userId)
    console.log("usersList", userFilter)
    console.log("userId", userId)
    return userFilter;
  }
)
export const login = createAsyncThunk(
  'login',
  async (newUser) => {
    const users = await fetchAllUsers()
    console.log(users)

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

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('currentUser')
      state.currentUser = {}
    }
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
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // console.log('log', action.payload)
      state.userRandom = action.payload
    })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer