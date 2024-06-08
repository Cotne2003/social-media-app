import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="border-gray-400 border-[4px] rounded-xl w-[350px] flex items-center justify-between py-4 px-6">
        <h2 className="font-semibold text-xl">
          ROCK
          <br />
          PAPPER
          <br />
          SCISSORS
        </h2>
        <div className="bg-white h-full flex flex-col justify-between items-center text-slate-700 font-bold rounded-xl px-6 py-2">
          <h2 className="text-base">SCORE</h2>
          <h2 className="text-5xl">12</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
