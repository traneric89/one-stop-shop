import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Goggles from "./Goggles";
import Snowboards from "./Snowboards";

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
  const [numItems, setNumItems] = useState(0);
  const [itemsCart, setItemsCart] = useState([]);

  const displayGoggles = () => {
    setShowSnowboards(false);
    setShowGoggles(true);
  };

  const displaySnowboards = () => {
    setShowGoggles(false);
    setShowSnowboards(true);
  };

  const addNumItem = (source, itemName, price) => {
    setNumItems(numItems + 1);
    let newItemObj = {
      source: source,
      itemName: itemName,
      price: price,
    };
    setItemsCart([...itemsCart, newItemObj]);
  };

  return (
    <div>
      <Navbar numItems={numItems} itemsCart={itemsCart} />
      <div className="container">
        <div className="selection">
          <h2 onClick={displayGoggles}>Goggles</h2>
          <h2 onClick={displaySnowboards}>Snowboards</h2>
        </div>
        <div className="item-container">
          {showGoggles
            ? goggleItem.map((item) => (
                <Goggles
                  onClick={addNumItem}
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
                  onClick={addNumItem}
                  key={item.itemName}
                  source={item.data.source}
                  itemName={item.data.title}
                  price={item.data.price}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
