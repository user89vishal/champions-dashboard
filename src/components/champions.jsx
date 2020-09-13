import React, { useEffect, useState } from "react";
import { saveList, addToCart, removeFromCart } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

import Popup from "./common/popup";
import ChampionsView from "./championsView";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import NavBar from "../components/navBar";
import leagueOfLegends from "../api/leagueOfLegendsApi";

const Champions = (props) => {
  const [champions, setChampions] = useState([]);
  const [sortedField, setShortedField] = useState(null);
  const [selectedChampion, setSelectedChampion] = useState();
  const [direction, setDirection] = useState("ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [searchedItem, setSearchedItem] = useState("");
  const dispatch = useDispatch();

  let cartItemsList = useSelector((state) => state.cartItems);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await leagueOfLegends.getLeagueOfLegendsListing();
    if (!response.ok) {
      return;
    }
    const data = response.data;
    setChampions(data);
    dispatch(saveList(data));
  };

  if (sortedField !== null) {
    champions.sort((a, b) => {
      const a_champName = a[sortedField].toString().toUpperCase();
      const b_champName = b[sortedField].toString().toUpperCase();

      if (a_champName > b_champName) {
        return direction === "ascending" ? -1 : 1;
      } else if (a_champName < b_champName) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const handleAddButton = (champion, actionType) => {
    if (actionType === "add") {
      dispatch(addToCart(champion.id));
    } else {
      dispatch(removeFromCart(champion.id));
    }
  };

  function itemSearched(item) {
    setSearchedItem(item);
  }

  function handleChampNameClick(champion) {
    setSelectedChampion(champion);
    setShow(true);
  }

  const handleSortingClick = (key) => {
    setShortedField(key);
    setDirection(direction === "ascending" ? "descending" : "ascending");
  };

  const handleClose = () => setShow(false);

  const handleOnCart = () => {
    if (cartItemsList.length > 0) {
      props.history.push({
        pathname: "/cartItems",
      });
    }
  };

  const handlePageChange = (page) => {
    console.log("handlePageChange", page);
    setCurrentPage(page);
  };
  //filter based on Search
  let filteredResult =
    searchedItem !== ""
      ? champions.filter((item) => item.name === searchedItem)
      : champions;

  const listToDisplay = paginate(filteredResult, currentPage, 4);

  return (
    <div>
      {champions.length === 0 ? (
        <div className="text-center mt-5">
          <h2>Data is loading, Please wait...</h2>
          <Spinner className="mt-3" animation="border" role="status" />
        </div>
      ) : (
        <div>
          <NavBar onSearch={itemSearched} handleCartClick={handleOnCart} />
          <Popup
            show={show}
            closePopup={handleClose}
            dataSource={selectedChampion}
          />
          <ChampionsView
            championsDataSource={listToDisplay}
            handleSorting={handleSortingClick}
            handleChampionClick={handleChampNameClick}
            handleAddToCart={handleAddButton}
          />
          <Pagination
            activePageNumber={currentPage}
            itemsCount={champions.length}
            pageSize={4}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Champions;
