"use client";

import React, { useState } from "react";
import Header from "./Header";
import Image from "next/image";
import Rules from "./Rules";
import data from "@/data";

const HomePage = () => {
  const [playerCard, setPlayerCard] = useState<undefined | number>(undefined);
  console.log(playerCard);

  return (
    <main className="pt-10 flex flex-col h-screen">
      <Header />
      {playerCard === undefined && (
        <section className="flex flex-col items-center justify-evenly h-full">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-10">
              <Image
                src={data[0].img}
                width={125}
                height={125}
                alt="hand"
                onClick={() => setPlayerCard(data[0].id)}
              />
              <Image
                src={data[1].img}
                width={125}
                height={125}
                alt="scissor"
                onClick={() => setPlayerCard(data[1].id)}
              />
            </div>
            <div>
              <Image
                src={data[2].img}
                width={125}
                height={125}
                alt="fist"
                onClick={() => setPlayerCard(data[2].id)}
              />
            </div>
          </div>
        </section>
      )}

      <div className="flex justify-center mb-10">
        <Rules />
      </div>
    </main>
  );
};

export default HomePage;
