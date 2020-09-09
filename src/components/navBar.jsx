import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  let list = useSelector((state) => state.cartItems);
  console.log("Updated list", Array.isArray(list));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">Online Test Application</li>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
      <div
        className="collapse navbar-collapse flex-grow-0"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav text-right">
          <li
            className="nav-item active"
            style={{ cursor: "pointer" }}
            // onClick={handleLogout}
          >
            <a className="nav-link" to="/">
              Watch list item count:{" "}
              {/* {list !== undefined
                ? list.filter((item) => item.added_to_cart === true).length
                : 0} */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;