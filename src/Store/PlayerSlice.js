import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Health: 2000,
  Attack: 300,
  Status: false,
};

export const PlayerSlice = createSlice({
  name: "PlayerSlice",
  initialState,
  reducers: {},
});
