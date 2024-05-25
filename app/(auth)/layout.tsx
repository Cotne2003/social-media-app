import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center h-screen justify-center">
      {children}
    </main>
  );
}
