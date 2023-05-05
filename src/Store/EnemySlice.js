import { createSlice } from "@reduxjs/toolkit";
import { Enemies } from "@/Data/Enemies";

const initialState = {
  Enemies: Enemies,
  CurrentEnemy: 0,
  CurrentEnemyHealth: null,
};

export const EnemySlice = createSlice({
  name: "EnemySlice",
  initialState,
  reducers: {
    SetNewEnemy: (state, action) => {
      const Value = action.payload;

      state.CurrentEnemy += Value;
    },
    SetCurrentEnemyHealth: (state, action) => {
      const Health = action.payload;

      state.CurrentEnemyHealth = Health;
    },
  },
});
