import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import AutoComplete from "./common/autoComplete";

const NavBar = (props) => {
  const { onSearch, handleCartClick } = props;
  let list = useSelector((state) => state.cartItems);
  let champions = useSelector((state) => state.championsList);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">League of Legends</li>
      <div className="container" style={{ width: "50%", marginLeft: 170 }}>
        <AutoComplete suggestions={champions} onSearch={onSearch} />
      </div>
      <div className="collapse navbar-collapse flex-grow-0">
        <ul className="navbar-nav text-right">
          <li className="nav-item active" style={{ cursor: "pointer" }}>
            <div style={{ position: "relative", marginRight: 20 }}>
              <FontAwesomeIcon
                style={{ height: 30, width: 30 }}
                icon={faCartPlus}
                onClick={handleCartClick}
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
