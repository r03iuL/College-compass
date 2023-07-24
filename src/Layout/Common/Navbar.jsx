import { Link } from "react-router-dom";
import logo from "/logo3.png"

const Navbar = () => {
    const NavItems = (
        <>
          <li>
            <Link className="mx-2 text-xl font-semibold" to={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className="mx-2 text-xl font-semibold" to={`/Colleges`}>
            Colleges
            </Link>
          </li>
          <li>
            <Link className="mx-2 text-xl font-semibold" to={`/Admission`}>
              {" "}
              Admission
            </Link>
          </li>
          <li>
            <Link className="mx-2 text-xl font-semibold" to={`/MyAdmission`}>
              {" "}
              My Admission
            </Link>
          </li>
          <li>
            <Link className="mx-2 text-xl font-semibold" to={`/Login`}>
              {" "}
              Log in
            </Link>
          </li>
          {/* {user ? (
            <li>
              <Link className="mx-2 text-xl font-semibold" to={`/Dashboard`}>
                Dashboard{" "}
              </Link>
            </li>
          ) : (
            <></>
          )} */}
        </>
      );
      return (
        <div>
          <div className="navbar py-2 bg-white opacity-90 text-black">
            <div className="navbar-start mx-0 md:mx-0 lg:mx-20">
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
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {NavItems}
                </ul>
              </div>
              <img
                className="hidden lg:block md:block"
                src={logo}
                alt="logo"
                style={{
                  height: 80,
                }}
              />
              <a className=" normal-case font-bold text-3xl px-5">College Compass</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{NavItems}</ul>
            </div>
            <div className="navbar-end">
              {/* {user ? (
                <>
                  <button className="btn mx-2 font-semibold" onClick={handlelogOut}>
                    <img
                      className="h-6  mr-2 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link className="btn mx-2 font-semibold" to={`/LogIn`}>
                    Log In
                  </Link>
                </>
              )} */}
            </div>
          </div>
        </div>
      );
};

export default Navbar;