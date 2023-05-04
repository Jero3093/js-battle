import React from "react";
import Link from "next/link";

function Reward() {
  return (
    <div className="flex flex-col items-center gap-y-9 mb-14 mt-14">
      <p className="text-4xl animate-bounce">!Congratulations!</p>
      <Link
        href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        target="_blank"
      >
        <p className="hover:border-b-2 pb-3 text-lg text-yellow-300 border-yellow-300">Click here to reclame your reward</p>
      </Link>
    </div>
  );
}

export default Reward;
