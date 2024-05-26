"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  to: string;
  name: string;
  img: string;
}

const NavLinks = ({ to, name, img }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={`flex items-center gap-3 capitalize font-semibold text-lg ${
        pathname === to ? "text-blue-600" : "text-black"
      }`}
    >
      <Image
        src={img}
        alt="icon"
        height={16}
        width={16}
        style={
          pathname === to
            ? {
                filter:
                  "brightness(0) saturate(100%) invert(45%) sepia(63%) saturate(7167%) hue-rotate(216deg) brightness(94%) contrast(96%)",
              }
            : {}
        }
      />
      <p>{name}</p>
    </Link>
  );
};

export default NavLinks;
