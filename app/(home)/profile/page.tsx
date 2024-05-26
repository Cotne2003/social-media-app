"use client";

import React from "react";
import axios from "axios";
import { auth, currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";

const page = () => {
  const { isLoaded, user, isSignedIn } = useUser();
  // const { userId } = auth();
  // const user = await currentUser();
  console.log("hehe ", user);

  return <div>pagasdasdasdasdasde</div>;
};

export default page;
