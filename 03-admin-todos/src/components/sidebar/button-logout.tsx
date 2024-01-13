"use client";

import { useSession, signOut, signIn } from "next-auth/react";

import { IoShieldOutline } from "react-icons/io5";

export function ButtonLogout() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
        <IoShieldOutline size={30} />
        <span className="group-hover:text-gray-700">Espere...</span>
      </button>
    );
  }
  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
      >
        <IoShieldOutline size={30} />
        <span className="group-hover:text-gray-700">Login</span>
      </button>
    );
  }
  return (
    <button
      onClick={() => signOut()}
      className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
    >
      <IoShieldOutline size={30} />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
}
