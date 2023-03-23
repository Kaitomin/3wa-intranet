import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../utils/fetch";

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  userRandom: {},
}

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async () => {
    const res = await fetchAllUsers()
    localStorage.setItem('users', JSON.stringify(res))
    return res;
  }
)
export const fetchUserById = createAsyncThunk(
  'fetchUserById',
  async(userId) => {
    const usersList = await fetchAllUsers();
    const userFilter = usersList.find(user => user.id == userId)
    return userFilter;
  }
)

export const addUser = createAsyncThunk(
  'addUser',
  async (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || await fetchAllUsers()
    user.id = nanoid()
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    return users
  }
)

export const modifyUser = createAsyncThunk(
  'modifyUser',
  async (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || await fetchAllUsers()
    const userId = users.findIndex(user => user.id === newUser.id)

    users[userId] = newUser
    localStorage.setItem('users', JSON.stringify(users))

    return { users, newUser }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const usersFiltered = state.users.filter(user => user.id !== action.payload)
      state.users = usersFiltered
      localStorage.setItem('users', JSON.stringify(usersFiltered))
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userRandom = action.payload
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(modifyUser.fulfilled, (state, action) => {
      state.users = action.payload.users
    })
  }
})

export const usersSelector = state => state.users.users
export const userRandomSelector = state => state.users.userRandom

export const { deleteUser } = userSlice.actions
export default userSlice.reducer