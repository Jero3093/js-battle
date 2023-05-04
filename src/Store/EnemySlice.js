import { createSlice } from "@reduxjs/toolkit";
import { Enemies } from "@/Data/Enemies";

const initialState = {
  Enemies,
  CurrentEnemy: 0,
};

export const EnemySlice = createSlice({
  name: "EnemySlice",
  initialState,
  reducers: {},
});
