"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Image from "next/image";
import Rules from "./Rules";
import data from "@/data";

type DataProp = {
  img: string;
  id: number;
  name: string;
};

const HomePage = () => {
  const [playerCard, setPlayerCard] = useState<undefined | DataProp>(undefined);
  const [houseCard, setHouseCard] = useState<undefined | DataProp>(undefined);
  const [playerWin, setPlayerWin] = useState<undefined | boolean>(undefined);
  const [playerScore, setPlayerScore] = useState(0);

  useEffect(() => {
    playerWin === true && setPlayerScore((prev) => prev + 1);
    playerWin === false && setPlayerScore((prev) => prev - 1);
  }, [playerWin]);

  useEffect(() => {
    if (playerCard?.id === 0) {
      if (houseCard?.id === 1) {
        setPlayerWin(false);
      } else if (houseCard?.id === 2) {
        setPlayerWin(true);
      }
    }

    if (playerCard?.id === 1) {
      if (houseCard?.id === 0) {
        setPlayerWin(true);
      } else if (houseCard?.id === 2) {
        setPlayerWin(false);
      }
    }

    if (playerCard?.id === 2) {
      if (houseCard?.id === 0) {
        setPlayerWin(false);
      } else if (houseCard?.id === 1) {
        setPlayerWin(true);
      }
    }
  }, [houseCard]);

  useEffect(() => {
    if (playerCard !== undefined) {
      setTimeout(() => {
        const filteredData = data.filter((card) => card.id !== playerCard?.id);
        const randomNumber = +Math.random().toFixed();
        setHouseCard(filteredData[randomNumber]);
      }, 1000);
    }
  }, [playerCard]);

  return (
    <main className="pt-10 flex flex-col h-screen items-center">
      <Header playerScore={playerScore} />
      {playerCard === undefined ? (
        <section className="mt-[60px] h-full">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-10">
              <Image
                src={data[0].img}
                width={200}
                height={200}
                className="max-lg:w-[125px] max-lg:h-[125px]"
                alt="hand"
                onClick={() => {
                  setPlayerCard(data[0]);
                }}
              />
              <Image
                src={data[1].img}
                width={200}
                height={200}
                className="max-lg:w-[125px] max-lg:h-[125px]"
                alt="scissor"
                onClick={() => {
                  setPlayerCard(data[1]);
                }}
              />
            </div>
            <div>
              <Image
                src={data[2].img}
                width={200}
                height={200}
                className="max-lg:w-[125px] max-lg:h-[125px]"
                alt="fist"
                onClick={() => {
                  setPlayerCard(data[2]);
                }}
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-[60px] h-full w-[350px] lg:w-[500px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center gap-5 lg:flex-col-reverse">
              <Image
                src={playerCard.img}
                width={200}
                height={200}
                alt="selected"
              />
              <h2 className="font-semibold">YOU PICKED</h2>
            </div>
            <div className="flex flex-col items-center gap-5 lg:flex-col-reverse">
              {houseCard ? (
                <Image
                  src={houseCard ? houseCard.img : ""}
                  width={200}
                  height={200}
                  alt="asd"
                />
              ) : (
                <div className="w-[200px] h-[200px] rounded-[50%] bg-slate-800"></div>
              )}
              <h2 className="font-semibold">THE HOUSE PICKED</h2>
            </div>
          </div>
          <div className="flex items-center mt-10 flex-col gap-3">
            <h1 className="text-5xl font-bold">
              {playerWin === true
                ? "YOU WIN"
                : playerWin === false
                ? "YOU LOSE"
                : ""}
            </h1>
            {playerWin !== undefined && (
              <button
                className="bg-white text-black w-60 rounded-lg h-12 font-bold"
                onClick={() => {
                  setPlayerCard(undefined);
                  setHouseCard(undefined);
                  setPlayerWin(undefined);
                }}
              >
                PLAY AGAIN
              </button>
            )}
          </div>
        </section>
      )}

      <div className="w-[130px] absolute bottom-10 lg:right-10">
        <Rules />
      </div>
    </main>
  );
};

export default HomePage;
