import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [ showDropDownMenu, setShowDropDownMenu ] = useState(false);

  return (
    <div className="">
      <nav className="flex flex-col md:flex-row justify-between py-5 px-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Logo className="relative"></Logo>
            <ul className={showDropDownMenu ? "absolute right-2 top-12 bg-gray-100 w-[100px] p-2 text-center rounded-lg" : "hidden"}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <FaBars onClick={() => setShowDropDownMenu(!showDropDownMenu)} className="md:hidden" />
        </div>
        <ul className="hidden md:flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
