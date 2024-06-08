import React from "react";
import Header from "./Header";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="pt-10 flex flex-col gap-20">
      <Header />
      <section className="flex flex-col items-center gap-5">
        <div className="flex gap-10">
          <Image src="/hand.png" width={125} height={125} alt="hand" />
          <Image src="/scissor.png" width={125} height={125} alt="scissor" />
        </div>
        <div>
          <Image src="/fist.png" width={125} height={125} alt="fist" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
