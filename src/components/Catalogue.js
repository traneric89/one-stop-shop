import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Goggles from "./Goggles";
import Snowboards from "./Snowboards";
import ItemFocus from "./ItemFocus";

const Catalogue = () => {
  const [goggleItem, setGoggleItem] = useState([
    {
      itemName: "elite",
      data: {
        source: "elite",
        title: "Smith Elite Goggles",
        price: "$129.00",
      },
    },
    {
      itemName: "aura",
      data: {
        source: "aura",
        title: "Smith Aura Goggles",
        price: "$149.00",
      },
    },
    {
      itemName: "pilot",
      data: {
        source: "pilot",
        title: "Smith Pilot Goggles",
        price: "$75.00",
      },
    },
    {
      itemName: "flight",
      data: {
        source: "flight",
        title: "Smith Flight Goggles",
        price: "$250.00",
      },
    },
    {
      itemName: "kim",
      data: {
        source: "kim",
        title: "Smith Kim Goggles",
        price: "$129.00",
      },
    },
    {
      itemName: "dawn",
      data: {
        source: "dawn",
        title: "Smith Dawm Goggles",
        price: "$180.00",
      },
    },
  ]);

  const [snowboardItem, setSnowboardItem] = useState([
    {
      itemName: "blaze",
      data: {
        source: "blaze",
        title: "Burton Blaze 2.0",
        price: "$649.00",
      },
    },
    {
      itemName: "arrow",
      data: {
        source: "arrow",
        title: "Burton Arrow",
        price: "$850.00",
      },
    },
    {
      itemName: "altitude",
      data: {
        source: "altitude",
        title: "K2 Altitutude",
        price: "$720.00",
      },
    },
    {
      itemName: "triplet",
      data: {
        source: "triplet",
        title: "YES Triplet",
        price: "$1090.00",
      },
    },
    {
      itemName: "angel",
      data: {
        source: "angel",
        title: "Libtech Angel",
        price: "$960.00",
      },
    },
  ]);

  const [showGoggles, setShowGoggles] = useState(true);
  const [showSnowboards, setShowSnowboards] = useState(true);
  const [showItemFocus, setShowItemFocus] = useState(false);
  const [itemFocusDetails, setItemFocusDetails] = useState([]);

  const displayGoggles = () => {
    setShowSnowboards(false);
    setShowGoggles(true);
    setShowItemFocus(false);
  };

  const displaySnowboards = () => {
    setShowGoggles(false);
    setShowSnowboards(true);
    setShowItemFocus(false);
  };

  const displayItemFocus = (source, itemName, price) => {
    setItemFocusDetails([source, itemName, price]);
    setShowGoggles(false);
    setShowSnowboards(false);
    setShowItemFocus(true);
    console.log(itemFocusDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="selection">
          <h2 onClick={displayGoggles}>Goggles</h2>
          <h2 onClick={displaySnowboards}>Snowboards</h2>
        </div>
        <div className="item-container">
          {showGoggles
            ? goggleItem.map((item) => (
                <Goggles
                  onClick={displayItemFocus}
                  key={item.itemName}
                  source={item.data.source}
                  itemName={item.data.title}
                  price={item.data.price}
                />
              ))
            : null}
          {showSnowboards
            ? snowboardItem.map((item) => (
                <Snowboards
                  onClick={displayItemFocus}
                  key={item.itemName}
                  source={item.data.source}
                  itemName={item.data.title}
                  price={item.data.price}
                />
              ))
            : null}
          {showItemFocus ? (
            <ItemFocus
              source={itemFocusDetails[0]}
              itemName={itemFocusDetails[1]}
              price={itemFocusDetails[2]}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
