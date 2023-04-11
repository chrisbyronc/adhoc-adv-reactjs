import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: ["Learn", "Nap", "Drink Water"]
};


export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload]
    },
    remove: (state, action) => {
      state.list = state.list.filter((val, i) => i !== action.payload)
    },
  },

});

export const { add, remove } = toDoSlice.actions;

export const selectList = (state) => state.toDo.list;

export default toDoSlice.reducer;
