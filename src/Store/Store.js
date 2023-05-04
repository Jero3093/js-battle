import { configureStore } from "@reduxjs/toolkit";
import { PlayerSlice } from "./PlayerSlice";
import { EnemySlice } from "./EnemySlice";

export const Store = configureStore({
  reducer: {
    PlayerSlice: PlayerSlice.actions,
    EnemySlice: EnemySlice.actions,
  },
});
