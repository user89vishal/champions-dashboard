import React, { useEffect, useState } from "react";
import { saveList, addToCart } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

import Popup from "./common/popup";
import ChampionsView from "./championsView";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

const champions = [
  {
    armor: 20.88,
    armorperlevel: 3.5,
    attackdamage: 45.66,
    attackdamageperlevel: 3.25,
    attackrange: 450,
    attackspeedoffset: null,
    attackspeedperlevel: 2.11,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/acac9a5630981ef7f67ec92f114baac8.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 550,
    hpperlevel: 87,
    hpregen: 6.5,
    hpregenperlevel: 0.55,
    id: 2661,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/b9884c94ab1e7bf68943bde28b41d3ea.png",
    movespeed: 335,
    mp: 467,
    mpperlevel: 30.5,
    mpregen: 8,
    mpregenperlevel: 0.8,
    name: "Karthus",
    spellblock: 30,
    spellblockperlevel: 0.5,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1"],
  },
  {
    armor: 22,
    armorperlevel: 3,
    attackdamage: 58,
    attackdamageperlevel: 3,
    attackrange: 550,
    attackspeedoffset: null,
    attackspeedperlevel: 2.112,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/70cf425231ba194f2b9901c27d698847.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 575,
    hpperlevel: 98,
    hpregen: 8,
    hpregenperlevel: 0.8,
    id: 2660,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/68910395988327ea8294bc5e36da5e96.png",
    movespeed: 340,
    mp: 300,
    mpperlevel: 50,
    mpregen: 8,
    mpregenperlevel: 1,
    name: "Ryze",
    spellblock: 36,
    spellblockperlevel: 0.5,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1"],
  },
  {
    armor: 21,
    armorperlevel: 4,
    attackdamage: 69,
    attackdamageperlevel: 3.5,
    attackrange: 525,
    attackspeedoffset: null,
    attackspeedperlevel: 4,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/a68610b9e5927c8387ab5ef93a2fa878.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 534,
    hpperlevel: 100,
    hpregen: 3.75,
    hpregenperlevel: 0.55,
    id: 2659,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/e05b5fd8059a74ff2a93e5e470865b11.png",
    movespeed: 325,
    mp: 250,
    mpperlevel: 45,
    mpregen: 6.3,
    mpregenperlevel: 0.4,
    name: "Kalista",
    spellblock: 30,
    spellblockperlevel: 0.5,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1"],
  },
  {
    armor: 18,
    armorperlevel: 3.5,
    attackdamage: 53,
    attackdamageperlevel: 3,
    attackrange: 550,
    attackspeedoffset: null,
    attackspeedperlevel: 1.5,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/93650214622d3dbd5a80f36f8dea48ef.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 560,
    hpperlevel: 90,
    hpregen: 5.5,
    hpregenperlevel: 0.5,
    id: 2658,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/723076f895babdd840b0edd87efc57ea.png",
    movespeed: 328,
    mp: 350,
    mpperlevel: 40,
    mpregen: 8,
    mpregenperlevel: 0.8,
    name: "Cassiopeia",
    spellblock: 32,
    spellblockperlevel: 0.5,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1"],
  },
  {
    armor: 28,
    armorperlevel: 3,
    attackdamage: 57,
    attackdamageperlevel: 2,
    attackrange: 550,
    attackspeedoffset: null,
    attackspeedperlevel: 2.1,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/65f15751e5166e07578969e543a91737.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 530,
    hpperlevel: 88,
    hpregen: 3.25,
    hpregenperlevel: 0.55,
    id: 2657,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/7d5b68d880b1c7d7fee9ec5bc126e101.png",
    movespeed: 325,
    mp: 348,
    mpperlevel: 42,
    mpregen: 6.5,
    mpregenperlevel: 0.4,
    name: "Aphelios",
    spellblock: 26,
    spellblockperlevel: 0.5,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1"],
  },
  {
    armor: 31,
    armorperlevel: 4,
    attackdamage: 60,
    attackdamageperlevel: 3,
    attackrange: 150,
    attackspeedoffset: null,
    attackspeedperlevel: 2,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/774c756fb172cb76e71036d7bb243f13.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 580,
    hpperlevel: 90,
    hpregen: 9,
    hpregenperlevel: 0.75,
    id: 2655,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/f7ca66dc9ea336dbcc751da649311049.png",
    movespeed: 340,
    mp: 350,
    mpperlevel: 50,
    mpregen: 6.25,
    mpregenperlevel: 0.5,
    name: "Volibear",
    spellblock: 32,
    spellblockperlevel: 1.25,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1", "10.12.1"],
  },
  {
    armor: 27,
    armorperlevel: 3.4,
    attackdamage: 61,
    attackdamageperlevel: 3,
    attackrange: 575,
    attackspeedoffset: null,
    attackspeedperlevel: 3,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/f27fa86ed430a94dbafd6d9629a3a8b5.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 530,
    hpperlevel: 91,
    hpregen: 3.5,
    hpregenperlevel: 0.55,
    id: 2654,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/ea68c04514d0c016b227b49502307d60.png",
    movespeed: 330,
    mp: 360,
    mpperlevel: 33,
    mpregen: 8,
    mpregenperlevel: 0.8,
    name: "Varus",
    spellblock: 30,
    spellblockperlevel: 0.5,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1", "10.12.1"],
  },
  {
    armor: 37,
    armorperlevel: 2.7,
    attackdamage: 68,
    attackdamageperlevel: 3,
    attackrange: 175,
    attackspeedoffset: null,
    attackspeedperlevel: 2.9,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/34bef513bd74e6d708dd79a16efa41f8.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 616,
    hpperlevel: 96,
    hpregen: 6,
    hpregenperlevel: 0.75,
    id: 2653,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/f05672e6b928274dbe87b76755cf6888.png",
    movespeed: 350,
    mp: 281,
    mpperlevel: 45,
    mpregen: 7.5,
    mpregenperlevel: 0.6,
    name: "Trundle",
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    videogame_versions: ["10.16.1", "10.15.1", "10.14.1", "10.13.1", "10.12.1"],
  },
  {
    armor: 25,
    armorperlevel: 3,
    attackdamage: 60,
    attackdamageperlevel: 2.9,
    attackrange: 525,
    attackspeedoffset: null,
    attackspeedperlevel: 3.3,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/6c08b29409864616b1ea76f83abcfb17.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 590,
    hpperlevel: 88,
    hpregen: 3.25,
    hpregenperlevel: 0.75,
    id: 2651,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/1cc5dde149711568fc0253729d625186.png",
    movespeed: 325,
    mp: 340,
    mpperlevel: 40,
    mpregen: 8.25,
    mpregenperlevel: 0.75,
    name: "Xayah",
    spellblock: 30,
    spellblockperlevel: 0.5,
    videogame_versions: [
      "10.16.1",
      "10.15.1",
      "10.14.1",
      "10.13.1",
      "10.12.1",
      "10.11.1",
    ],
  },
  {
    armor: 27,
    armorperlevel: 3,
    attackdamage: 59,
    attackdamageperlevel: 3.11,
    attackrange: 550,
    attackspeedoffset: null,
    attackspeedperlevel: 3.38,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/9c8064719b4c91ebe9b9097620500ce8.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 612,
    hpperlevel: 86,
    hpregen: 3.75,
    hpregenperlevel: 0.6,
    id: 2648,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/f853d73d8141704d87fb7b82488940f5.png",
    movespeed: 330,
    mp: 287.2,
    mpperlevel: 40,
    mpregen: 7.256,
    mpregenperlevel: 0.45,
    name: "Twitch",
    spellblock: 30,
    spellblockperlevel: 0.5,
    videogame_versions: [
      "10.16.1",
      "10.15.1",
      "10.14.1",
      "10.13.1",
      "10.12.1",
      "10.11.1",
    ],
  },
];

const Champions = () => {
  const [sortedField, setShortedField] = useState(null);
  const [selectedChampion, setSelectedChampion] = useState();
  const [direction, setDirection] = useState("ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  let list = useSelector((state) => state.cartItems);

  useEffect(() => {
    dispatch(saveList(champions));
  }, []);

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

  const handleAddButton = (champion) => {
    dispatch(addToCart(champion.id));
  };

  function handleChampNameClick(champion) {
    setSelectedChampion(champion);
    setShow(true);
  }

  const handleSortingClick = (key) => {
    setShortedField(key);
    setDirection(direction === "ascending" ? "descending" : "ascending");
  };

  const handleClose = () => setShow(false);

  const handlePageChange = (page) => {
    console.log("handlePageChange", page);
    setCurrentPage(page);
  };

  const listToDisplay = paginate(champions, currentPage, 4);

  return (
    <div>
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
  );
};

export default Champions;
