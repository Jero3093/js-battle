import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; //Redux
import { PlayerSlice } from "@/Store/PlayerSlice"; //Player Slice Component
import { EnemySlice } from "@/Store/EnemySlice"; //Enemy Slice Component
import Reward from "./Reward"; //Reward Component
import EnemyList from "./EnemyList"; //Enemy List Component

function BattlePage() {
  const Enemies = useSelector((state) => state.EnemySlice.Enemies); //Enemies Data
  const CurrentEnemy = useSelector((state) => state.EnemySlice.CurrentEnemy); //Current Enemy Number

  const PlayerHealth = useSelector((state) => state.PlayerSlice.Health); //Player Health
  const PlayerAttack = useSelector((state) => state.PlayerSlice.Attack); //Player Attack
  const PlayerStatus = useSelector((state) => state.PlayerSlice.Status); //Player Status

  const [EnemyHealth, setEnemyHealth] = useState(
    Enemies[CurrentEnemy] ? Enemies[CurrentEnemy].health : ""
  ); //Current enemy health state

  const Dispatch = useDispatch(); //Use Dispatch Hook

  useEffect(() => {
    Dispatch(EnemySlice.actions.SetCurrentEnemyHealth(EnemyHealth));

    if (PlayerHealth <= 0) {
      Dispatch(PlayerSlice.actions.SetNewStatus(true));
    } else if (EnemyHealth <= 0) {
      Dispatch(
        EnemySlice.actions.SetNewEnemy(1),
        PlayerSlice.actions.IncreaseHealth(100)
      );
      setEnemyHealth(Enemies[CurrentEnemy].health);
    }

    return;
  }, [PlayerHealth, EnemyHealth]); //Effect to check if players health is equal or lower than 0 and the enemy health is equal or lower than 0

  const HandleAttack = () => {
    setEnemyHealth(EnemyHealth - PlayerAttack);
    Dispatch(PlayerSlice.actions.DecreaseHealth(Enemies[CurrentEnemy].attack));
  }; //Funtion to attack the enemy with the attack power value

  const HandleDefend = () => {
    Dispatch(
      PlayerSlice.actions.DecreaseHealth(Enemies[CurrentEnemy].attack / 2)
    );
    setEnemyHealth(EnemyHealth - PlayerAttack / 3);
  }; //Funtion to defend from the attack of the enemy

  return (
    <div>
      {/* Enemies List - Reward Page*/}
      {Enemies[CurrentEnemy] ? <EnemyList /> : <Reward />}
      {/* Player Buttons */}
      {PlayerStatus ? (
        ""
      ) : (
        <div className="flex flex-col gap-y-4 items-center">
          <div className="flex flex-row gap-x-4">
            {/* Attack Button */}
            <button
              onClick={HandleAttack}
              className="bg-yellow-300 p-3 rounded-xl text-black w-32 text-lg font-bold"
            >
              Attack
            </button>
            {/* Defense Button */}
            <button
              onClick={HandleDefend}
              className="bg-sky-400 p-3 rounded-xl text-black w-32 text-lg font-bold"
            >
              Defend
            </button>
          </div>
        </div>
      )}
      {/* Status Message */}
      {PlayerStatus ? (
        <div className="flex flex-col gap-y-3 items-center">
          <p className="text-4xl text-red-500 font-bold mt-8 animate-bounce">
            Game Over
          </p>
          <p className="text-xl text-white">Reload and Try again</p>
        </div>
      ) : (
        //Player Health - Attack
        <div className="flex flex-col items-center">
          <p className="text-lg mt-3">Player Health: {PlayerHealth} HP</p>
          <p className="text-lg mt-3">Player Attack: {PlayerAttack} ATK</p>
        </div>
      )}
    </div>
  );
}

export default BattlePage;
