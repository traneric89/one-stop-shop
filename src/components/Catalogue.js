import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Goggles from "./Goggles";
import Snowboards from "./Snowboards";
import uniqid from "uniqid";

const Catalogue = () => {
  const [goggleItem, setGoggleItem] = useState([
    {
      itemName: "elite",
      data: {
        source: "elite",
        title: "Smith Elite Goggles",
        price: 129.0,
        qty: 1,
        id: 1,
      },
    },
    {
      itemName: "aura",
      data: {
        source: "aura",
        title: "Smith Aura Goggles",
        price: 149.0,
        qty: 1,
        id: 2,
      },
    },
    {
      itemName: "pilot",
      data: {
        source: "pilot",
        title: "Smith Pilot Goggles",
        price: 75.0,
        qty: 1,
        id: 3,
      },
    },
    {
      itemName: "flight",
      data: {
        source: "flight",
        title: "Smith Flight Goggles",
        price: 250.0,
        qty: 1,
        id: 4,
      },
    },
    {
      itemName: "kim",
      data: {
        source: "kim",
        title: "Smith Kim Goggles",
        price: 129.0,
        qty: 1,
        id: 5,
      },
    },
    {
      itemName: "dawn",
      data: {
        source: "dawn",
        title: "Smith Dawn Goggles",
        price: 180.0,
        qty: 1,
        id: 6,
      },
    },
  ]);

  const [snowboardItem, setSnowboardItem] = useState([
    {
      itemName: "blaze",
      data: {
        source: "blaze",
        title: "Burton Blaze 2.0",
        price: 649.0,
        qty: 1,
        id: 7,
      },
    },
    {
      itemName: "arrow",
      data: {
        source: "arrow",
        title: "Burton Arrow",
        price: 850.0,
        qty: 1,
        id: 8,
      },
    },
    {
      itemName: "altitude",
      data: {
        source: "altitude",
        title: "K2 Altitutude",
        price: 720.0,
        qty: 1,
        id: 9,
      },
    },
    {
      itemName: "triplet",
      data: {
        source: "triplet",
        title: "YES Triplet",
        price: 1090.0,
        qty: 1,
        id: 10,
      },
    },
    {
      itemName: "angel",
      data: {
        source: "angel",
        title: "Libtech Angel",
        price: 960.0,
        qty: 1,
        id: 11,
      },
    },
  ]);

  const [showCart, setShowCart] = useState(false);
  const [showGoggles, setShowGoggles] = useState(true);
  const [showSnowboards, setShowSnowboards] = useState(true);
  const [numItems, setNumItems] = useState(0);
  const [itemsCart, setItemsCart] = useState([]);
  const [newItem, setNewItem] = useState({});
  const isMounted = useRef(false);

  const displayGoggles = () => {
    setShowSnowboards(false);
    setShowGoggles(true);
  };

  const displaySnowboards = () => {
    setShowGoggles(false);
    setShowSnowboards(true);
  };

  const showCartDisplay = (set) => {
    setShowCart(set);
  };

  const decrementItemQty = (itemId) => {
    setNumItems(numItems - 1);

    const itemsCartCopy = itemsCart;
    for (let i = 0; i < itemsCartCopy.length; i++) {
      if (itemsCartCopy[i].id === itemId) {
        if (itemsCartCopy[i].qty > 1) {
          itemsCartCopy[i].qty--;
          break;
        } else if (itemsCartCopy[i].qty === 1) {
          itemsCartCopy.splice(i, 1);
        }
      }
    }
    setItemsCart(itemsCartCopy);
  };

  const incrementItemQty = (itemId) => {
    setNumItems(numItems + 1);

    const itemsCartCopy = itemsCart;
    for (let i = 0; i < itemsCartCopy.length; i++) {
      if (itemsCartCopy[i].id === itemId) {
        itemsCartCopy[i].qty++;
        break;
      }
    }
    setItemsCart(itemsCartCopy);
  };

  const incrementNumItems = (source, itemName, price, qty, id) => {
    setNumItems(numItems + 1);
    let newItemObj = {
      source: source,
      itemName: itemName,
      price: price,
      qty: qty,
      id: id,
    };
    setNewItem(newItemObj);
  };

  useEffect(() => {
    let foundDuplicate = 0;
    if (isMounted.current) {
      if (itemsCart.length === 0) {
        setItemsCart([newItem]);
      } else if (itemsCart.length >= 1) {
        const itemsCartCopy = itemsCart;
        const newItemCopy = newItem;
        for (let i = 0; i < itemsCartCopy.length; i++) {
          if (itemsCartCopy[i].id === newItem.id) {
            itemsCartCopy[i].qty++;
            foundDuplicate++;
            break;
          }
        }
        if (!foundDuplicate) {
          itemsCartCopy.push(newItemCopy);
        }
        setItemsCart(itemsCartCopy);
      }
    } else {
      isMounted.current = true;
    }
  }, [newItem]);

  useEffect(() => {
    localStorage.setItem("itemsCart", JSON.stringify(itemsCart));
    localStorage.setItem("numItems", numItems);
  }, [numItems, itemsCart]);

  return (
    <div>
      <Navbar
        numItems={numItems}
        itemsCart={itemsCart}
        onClick={showCartDisplay}
        onIncrement={incrementItemQty}
        onDecrement={decrementItemQty}
      />
      <div className={showCart ? "container shop-disable" : "container"}>
        <div className="selection">
          <h2 onClick={displayGoggles}>Goggles</h2>
          <h2 onClick={displaySnowboards}>Snowboards</h2>
        </div>
        <div className="item-container">
          {showGoggles
            ? goggleItem.map((item) => (
                <Goggles
                  onClick={incrementNumItems}
                  key={uniqid()}
                  source={item.data.source}
                  itemName={item.data.title}
                  price={item.data.price}
                  qty={item.data.qty}
                  id={item.data.id}
                />
              ))
            : null}
          {showSnowboards
            ? snowboardItem.map((item) => (
                <Snowboards
                  onClick={incrementNumItems}
                  key={uniqid()}
                  source={item.data.source}
                  itemName={item.data.title}
                  price={item.data.price}
                  qty={item.data.qty}
                  id={item.data.id}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
