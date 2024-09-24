import React from "react";
import MultiItemCarousel from "./Slider";
import { productCategories } from "../../Data";

const ProductComp = () => {
  return (
    <section>
      {productCategories.map((item,i) => {
        return (
          <>
            <div key={i} className="container mt-5">
              <div className="d-flex justify-content-between">
              <h2 className="hot-products-header">{item.title}</h2>
              <h3 className={`fs-6 text-decoration-underline mt-4 me-2 seeProducts ${i === 0 ? "d-none" : ""}`}><a>SEE ALL PRODUCTS</a></h3>
              </div>
              <div className="underline border-bottom-2">
                <div className="underline-top"></div>
              </div>
              <MultiItemCarousel />
            </div>
          </>
        );
      })}
    </section>
  );
};

export default ProductComp;
