import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

const ChampionsView = ({
  championsDataSource,
  handleSorting,
  handleChampionClick,
  handleAddToCart,
}) => {
  let cartItemsList = useSelector((state) => state.cartItems);

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
          <tr key={champion.id}>
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
              {cartItemsList.filter((item) => item.id === champion.id)
                .length !== 0 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(champion, "remove")}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(champion, "add")}
                >
                  Add
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChampionsView;
