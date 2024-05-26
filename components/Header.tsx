import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import NavLinks from "./NavLinks";

const links = [
  {
    name: "home",
    img: "/icons/house.png",
    to: "/",
  },
  {
    name: "profile",
    img: "/icons/user.png",
    to: "/profile",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between px-3 py-2 border-b">
      <Sheet>
        <SheetTrigger className="sm:hidden">
          <Image src="/icons/menu.png" alt="menu" width={34} height={34} />
        </SheetTrigger>
        <SheetContent side={"left"} className="sm:hidden blue">
          <nav className="flex flex-col gap-3 mt-10">
            {links.map((link, index) => (
              <NavLinks
                img={link.img}
                name={link.name}
                to={link.to}
                key={index}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
