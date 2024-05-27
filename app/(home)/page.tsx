import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  console.log("hehehehe ", user);

  return <div></div>;
};

export default page;
