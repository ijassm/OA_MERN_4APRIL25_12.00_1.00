import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#6EC2F6" : "white",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 shadow">
      <section className="flex justify-between items-center max-w-4xl m-auto py-2">
        <img className="w-full max-w-20" src={Logo} alt="logo" />
        <div className="navbar-menu">
          <div className="space-x-4">
            <NavLink to="/home" style={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/course" style={navLinkStyle}>
              Course
            </NavLink>
            <NavLink to="/contact" style={navLinkStyle}>
              Contact
            </NavLink>
          </div>
        </div>
      </section>
    </nav>
  );
};
