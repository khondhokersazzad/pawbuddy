import React, { useContext } from "react";
import pawBuddy from "../assets/pawbuddy.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <div className="flex justify-center items-center py-5 bg-gradient-to-r from-pink-200 via-yellow-200 to-blue-200">
        <img src={pawBuddy} alt="" height="130" width="130" />
      </div>
      <div
        className="navbar shadow-sm bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100

"
      >
        <div className="navbar-start">
          <NavLink className="btn btn-ghost text-xl text-blue-500" to="/">
            PawBuddy
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex font-semibold text-[16px]">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 font-bold underline underline-offset-4"
                    : "hover:text-purple-700"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 font-bold underline underline-offset-4"
                    : "hover:text-purple-700"
                }
                to="/all-products"
              >
                Pets & Supplies Page
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 font-bold underline underline-offset-4"
                        : "hover:text-purple-700"
                    }
                    to="/profile"
                  >
                    My Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 font-bold underline underline-offset-4"
                        : "hover:text-purple-700"
                    }
                    to="/add-listing"
                  >
                    Add Listing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 font-bold underline underline-offset-4"
                        : "hover:text-purple-700"
                    }
                    to="/my-listing"
                  >
                    My Listing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 font-bold underline underline-offset-4"
                        : "hover:text-purple-700"
                    }
                    to="/my-orders"
                  >
                    My Orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/80 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-purple-700 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-products"
                  className={({ isActive }) =>
                    isActive ? "text-purple-700 font-bold" : ""
                  }
                >
                 Pets & Supplies Page
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-purple-700 font-bold underline underline-offset-4"
                          : "hover:text-purple-700"
                      }
                      to="/profile"
                    >
                      My Profile
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-purple-700 font-bold underline underline-offset-4"
                          : "hover:text-purple-700"
                      }
                      to="/add-listing"
                    >
                      Add Listing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-purple-700 font-bold underline underline-offset-4"
                          : "hover:text-purple-700"
                      }
                      to="/my-listing"
                    >
                      My Listing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-purple-700 font-bold underline underline-offset-4"
                          : "hover:text-purple-700"
                      }
                      to="/my-orders"
                    >
                      My Orders
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {user?.uid ? (
            <div>
              <div className="avatar mr-3" title={user?.displayName}>
                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>

              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn" to="/auth/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
