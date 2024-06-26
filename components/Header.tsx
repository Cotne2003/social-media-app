import React from "react";

type Props = {
  playerScore: number;
};

const Header = ({ playerScore }: Props) => {
  return (
    <header className="flex justify-center">
      <div className="border-gray-400 border-[4px] rounded-xl w-[350px] flex items-center justify-between py-4 px-6 lg:w-[800px]">
        <h2 className="font-semibold text-xl lg:text-3xl">
          ROCK
          <br />
          PAPPER
          <br />
          SCISSORS
        </h2>
        <div className="bg-white h-full flex flex-col justify-between items-center text-slate-700 font-bold rounded-xl px-6 py-2">
          <h2 className="text-base lg:text-lg">SCORE</h2>
          <h2 className="text-5xl">{playerScore}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
