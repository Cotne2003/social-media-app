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
      <Header />
      {playerCard === undefined ? (
        <section className="mt-[60px] h-full">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-10">
              <Image
                src={data[0].img}
                width={125}
                height={125}
                alt="hand"
                onClick={() => {
                  setPlayerCard(data[0]);
                }}
              />
              <Image
                src={data[1].img}
                width={125}
                height={125}
                alt="scissor"
                onClick={() => {
                  setPlayerCard(data[1]);
                }}
              />
            </div>
            <div>
              <Image
                src={data[2].img}
                width={125}
                height={125}
                alt="fist"
                onClick={() => {
                  setPlayerCard(data[2]);
                }}
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-[60px] h-full w-[350px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center gap-5">
              <Image
                src={playerCard.img}
                width={125}
                height={125}
                alt="selected"
              />
              <h2 className="font-semibold">YOU PICKED</h2>
            </div>
            <div className="flex flex-col items-center gap-5">
              {houseCard ? (
                <Image
                  src={houseCard ? houseCard.img : ""}
                  width={125}
                  height={125}
                  alt="asd"
                />
              ) : (
                <div className="w-[125px] h-[125px] rounded-[50%] bg-slate-800"></div>
              )}

              <h2 className="font-semibold">THE HOUSE PICKED</h2>
            </div>
          </div>
        </section>
      )}

      <div className="w-[130px] absolute bottom-10">
        <Rules />
      </div>
    </main>
  );
};

export default HomePage;
