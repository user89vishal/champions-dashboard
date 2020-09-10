import React from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

const ChampionsView = ({
  championsDataSource,
  handleSorting,
  handleChampionClick,
  handleAddToCart,
}) => {
  let list = useSelector((state) => state.cartItems);
  console.log("List in champions view", list);

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => handleSorting("name")}
          >
            Name
          </th>
          <th>Image</th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => handleSorting("armor")}
          >
            Armor
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => handleSorting("movespeed")}
          >
            Movespeed
          </th>
          <th>Add to watch list</th>
        </tr>
      </thead>
      <tbody>
        {championsDataSource.map((champion) => (
          <tr>
            <td
              style={{ cursor: "pointer" }}
              onClick={() => handleChampionClick(champion)}
            >
              {champion.name}
            </td>
            <td>
              <img src={champion.image_url} />
            </td>
            <td>{champion.armor}</td>
            <td>{champion.movespeed}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAddToCart(champion)}
              >
                {list.map((item) =>
                  item.id === champion.id ? "REMOVE" : "ADD"
                )}
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChampionsView;
