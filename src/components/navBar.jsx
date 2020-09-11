import React from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  let list = useSelector((state) => state.cartItems);
  // console.log("Updated list", list);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">League of Legends</li>
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
            {/* Watch list item count: {list.length} */}
            {/* <FontAwesomeIcon
              style={{ height: 30, width: 30, marginRight: 30 }}
              icon={faCartPlus}
            /> */}

            <div style={{ position: "relative", marginRight: 20 }}>
              <FontAwesomeIcon
                style={{ height: 30, width: 30 }}
                icon={faCartPlus}
              />
              <span style={{ position: "absolute", color: "red", bottom: 20 }}>
                {list.length !== 0 && list.length}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
