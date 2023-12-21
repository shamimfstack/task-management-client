import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logout successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
    )
  }

  const navOptions = (
    <>
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
      {
        user ?
        <button className="btn btn-primary btn-sm" onClick={handleLogout}>Logout</button>
        :
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
      }
    </>
  );

  return (
    <div className="">
      <nav className="flex flex-col md:flex-row justify-between py-5 px-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Logo className="relative"></Logo>
            <ul
              className={
                showDropDownMenu
                  ? "absolute right-2 top-12 bg-gray-100 w-[100px] p-2 text-center rounded-lg"
                  : "hidden"
              }
            >
              {navOptions}
            </ul>
          </div>
          <FaBars
            onClick={() => setShowDropDownMenu(!showDropDownMenu)}
            className="md:hidden"
          />
        </div>
        <ul className="hidden md:flex gap-5">
        {navOptions}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
