import React from "react";
import "./Header.scss";
import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

const Header = ({ res }) => {
  const [selectedBtn, setSelectedBtn] = useState(res[0]);
  return (
    <header>
      <h1>Product List</h1>
      <ul>
        {res.map((item, index) => {
          return (
            <li key={index}>
              {/* {"        ///BURASI ONEMLI "} */}
              <button
                className={selectedBtn === item ? "selected" : ""}
                onClick={() => setSelectedBtn(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <ProductCard selectedBtn={selectedBtn}></ProductCard>
    </header>
  );
};

export default Header;
