import React from "react";
import { Navbar } from "../components/navbar";
import { NavLink, Outlet } from "react-router";

const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#6EC2F6" : "black",
    textDecoration: isActive ? "underline" : "none",
  };
};

export function Course() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen py-12 w-[90%] max-w-4xl m-auto">
        <h1 className="text-4xl font-bold my-2">Welcome to the Course Page</h1>
        <p className="my-2 text-center max-w-2xl">
          Here you can find information about the courses we offer. Choose
          between online and offline courses to suit your learning style.
        </p>
        <div className="flex gap-4 text-xl my-6">
          <NavLink to="online" style={navLinkStyle}>
            Online course
          </NavLink>
          <NavLink to="offline" style={navLinkStyle}>
            Offline course
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
}
