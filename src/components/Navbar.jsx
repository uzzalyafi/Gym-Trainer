import "./navBar.css";
import logo from "../assets/images/logo.png";
import links from "../data";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="container nav_container">
      
        {/* logo */}
        <Link to="/">
          <img onClick={() => setToggle(false)} className="logo" src={logo} alt="logo" />
        </Link>

        {/* links */}
        <ul onClick={() => setToggle((prev) => !prev)} className={`nav_links ${toggle ? "show_nav" : "hidden_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active_nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Toggle btn */}
        <div className="nav_toggle_btn" onClick={() => setToggle((prev) => !prev) }>
          {
            toggle ? <IoMdClose /> : <FaBars />
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
