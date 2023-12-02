import React from "react";
import { useEffect, useState } from "react";
import { products } from "../../helper/data";
import "../ProductCard/ProductCard.scss";

export const ProductCard = ({ selectedBtn }) => {
  const [product, setProduct] = useState(products);

  useEffect(() => {
    if (selectedBtn !== "all") {
      //all'a esit olmadidinga filtrele diger durumda genel data..
      const filteredData = products.filter((x) => x.category === selectedBtn);
      setProduct(filteredData);
    } else if (selectedBtn) {
      setProduct(products);
    }
  }, [selectedBtn]); // bir degisiklik varsa render..

  return (
    <div className="mainProduct">
      {product.map((pro) => (
        <div className="mainItem" key={pro.id}>
          <div className="mainImg">
            <img src={pro.image} alt={pro.title} />
            <div className="mainPrice">
              <p>{pro.price}$</p>
            </div>
            <div className="mainTitle">
              <h2>{pro.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
