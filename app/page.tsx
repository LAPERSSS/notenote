"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <>
      <button
        onClick={() => {
          signOut();
        }}
      >
        sign out
      </button>
    </>
  );
}
