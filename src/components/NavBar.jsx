import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div
      className="
  bg-gradient-to-r
  from-pink-100 via-yellow-100 to-blue-100
  dark:from-[#1f1b2e] dark:via-[#1b2430] dark:to-[#0f172a]
"
    >
      <div
        className="max-w-[1280px] mx-auto navbar shadow-sm 

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
              className="
  menu menu-sm dropdown-content
  mt-3 w-52 p-2 rounded-box shadow-lg
  bg-white/80 backdrop-blur-md
  dark:bg-slate-900/80
  text-slate-800 dark:text-slate-200
  border border-slate-200 dark:border-slate-700
"
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

              <li>
                <div className="px-3">
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle"
                  />
                </div>
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

          <div className="px-3 hidden lg:block">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
          </div>

          {/* {user?.uid ? (
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
          )} */}

          {user?.uid ? (
            <div className="relative mr-5">
              <button
                className="avatar cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} alt="avatar" />
                </div>
              </button>

              {/* DropDown  */}
              {open && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 z-50 overflow-hidden">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 border-b border-gray-100 dark:border-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">📊</span>
                      Dashboard
                    </span>
                  </Link>

                  <NavLink
                    className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 border-b border-gray-100 dark:border-slate-600"
                    to="/profile"
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">👤</span>
                      My Profile
                    </span>
                  </NavLink>

                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-lg">🚪</span>
                    Logout
                  </button>
                </div>
              )}
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
