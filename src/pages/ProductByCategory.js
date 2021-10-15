import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getProductByCategory } from "../actions/products";

import ProductCard from "../components/PorductCard";
const ProductByCategory = ({ productState, getProductByCategory }) => {
  const { id, categoryName } = useParams();

  useEffect(() => {
    getProductByCategory(id);
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-1"> {categoryName}</h2>
      <div className="my-5">
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {productState.products ? (
            productState.products.length !== 0 ? (
              productState.products.map((prods) => (
                <ProductCard
                  name={prods.productName}
                  id={prods.productId}
                  price={prods.pricePerSeat}
                  image={prods.productImage}
                />
              ))
            ) : (
              <p className="text-center" style={{ fontWeight: "bold" }}>
                No Products Found!
              </p>
            )
          ) : (
            <p className="text-center" style={{ fontWeight: "bold" }}>
              Something Went Wrong!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productState: state.product,
});

const mapDispatchToProps = {
  getProductByCategory: (data) => getProductByCategory(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductByCategory);
