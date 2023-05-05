import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux"; //Redux

function EnemyList() {
  const Enemies = useSelector((state) => state.EnemySlice.Enemies); //Enemies Data
  const CurrentEnemy = useSelector((state) => state.EnemySlice.CurrentEnemy); //Current Enemy Number
  const EnemyHealth = useSelector(
    (state) => state.EnemySlice.CurrentEnemyHealth
  ); //Current Enemy Health

  return Enemies.map((enemy) => {
    return (
      <div
        className="flex flex-col gap-y-2 items-center mb-9 shadow-2xl p-4 rounded-lg w-96"
        key={enemy.id}
      >
        <p className="text-2xl font-bold">{enemy.name}</p>
        <p className="text-lg">{enemy.alias}</p>
        <Image src={enemy.weapon} className="w-64 h-64 object-contain" />
        <p className="text-lg">Health: {EnemyHealth} HP</p>
        <p className="text-lg">Attack: {enemy.attack} ATK</p>
      </div>
    );
  })[CurrentEnemy];
}

export default EnemyList;
