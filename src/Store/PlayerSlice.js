import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Health: 6500,
  Attack: 300,
  Status: false,
};

export const PlayerSlice = createSlice({
  name: "PlayerSlice",
  initialState,
  reducers: {
    SetNewStatus: (state, action) => {
      const NewState = action.payload;

      state.Status = NewState;
    },
    IncreaseHealth: (state, action) => {
      const Value = action.payload;

      state.Health += Value;
    },
    DecreaseHealth: (state, action) => {
      const Value = action.payload;

      state.Health -= Value;
    },
  },
});
