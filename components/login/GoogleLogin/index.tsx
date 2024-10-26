"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const GoogleLogin = () => {
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }
  return (
    <div
      className="bg-white border-solid border-2 border-green-500 rounded-xl p-2 text-center m-2 hover:text-green-500 cursor-pointer"
      onClick={() => {
        signIn("google");
      }}
    >
      Sign In with Google
    </div>
  );
};

export default GoogleLogin;
