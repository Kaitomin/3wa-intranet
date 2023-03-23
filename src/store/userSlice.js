import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../utils/fetch";

const initialState = {
  users: [],
  userRandom: {},
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
    return userFilter;
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userRandom = action.payload
    })
  }
})

export const usersSelector = state => state.users.users
export const userRandomSelector = state => state.users.userRandom

export default userSlice.reducer