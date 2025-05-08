import React from "react";
import { Navbar } from "../components/navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">This is the home page of our application.</p>
        <p className="text-lg">
          You can navigate to other pages using the navbar above.
        </p>
        <p className="text-lg">Feel free to explore!</p>
        <p className="text-lg">Enjoy your stay!</p>
        <p className="text-lg">Have fun coding!</p>
      </div>
    </>
  );
}
