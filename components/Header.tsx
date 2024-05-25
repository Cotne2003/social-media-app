import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold text-blue-500 cursor-pointer">
        Social Media App
      </h1>
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger>
            <Image src="/icons/menu.png" alt="menu" width={34} height={34} />
          </SheetTrigger>
          <SheetContent side={"left"}></SheetContent>
        </Sheet>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
