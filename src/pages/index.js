import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/Components/Header"; //Header Component
import BattlePage from "@/Components/BattlePage"; //Battle Page Component

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [GetStarted, setGetStarted] = useState(false); //Game Start State

  return (
    <main
      className={`flex flex-col items-center ${inter.className} bg-slate-700 h-screen`}
    >
      {/* Header */}
      <Header />
      {/* Battle Component */}
      {GetStarted ? (
        //Battle Page
        <BattlePage />
      ) : (
        //Introduction Page
        <div className="flex flex-col items-center w-96 p-3">
          <p className="text-3xl border-b-2 pb-3 w-52 text-center">Welcome</p>
          <p className="mt-3 text-xl text-justify">
            "Heroes and Legends: Battle for Greatness" is an action-packed
            adventure game that features iconic movie characters like Luke
            Skywalker, Indiana Jones. Join forces with these legendary heroes,
            upgrade their abilities, and face off against powerful enemies.
            Explore stunning environments, solve puzzles, and experience
            cooperative multiplayer gameplay. Get ready for an epic battle for
            greatness in this thrilling game!
          </p>
          <button
            onClick={() => setGetStarted(true)}
            className="p-3 bg-yellow-400 text-black text-xl font-bold rounded-full mt-7 w-80"
          >
            Get Started
          </button>
        </div>
      )}
    </main>
  );
}
