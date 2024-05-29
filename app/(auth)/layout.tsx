import React from "react";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center h-screen justify-center bg-slate-400">
      {children}
    </main>
  );
}
