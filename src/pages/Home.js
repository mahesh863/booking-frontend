import React, { useEffect, useState } from "react";
import { Form, Input } from "reactstrap";
import CategoryCard from "../components/CategoryCard";

//Components
import Porduct from "../components/PorductCard";
import SearchResultCard from "../components/SearchResultCard";
import NotAutenticated from "../components/NotAutenticated";

//Css
import "../css/Home.page.css";

//Redux
import { connect, useDispatch } from "react-redux";
import { getCategories } from "../actions/categories";
import { featuredProducts, getNewProducts } from "../actions/products";
import { searchForPorducts } from "../helpers/products";
import { SELECT_SEATS } from "../actions/action.type";

const Home = ({
  userState,
  history,
  getCategories,
  categoryState,
  getNewProducts,
  productState,
  featuredProducts,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const dispatch = useDispatch();

  const handelSearchSubmit = (e) => {
    e.preventDefault();

    searchForPorducts(searchTerm)
      .then((res) => {
        setSearchResult(res.data.data);
        setDisplaySearch(true);
      })
      .catch((err) => {
        console.log(err);
        setDisplaySearch(false);
      });
  };

  useEffect(() => {
    if (!userState.isAuthenticated) {
      history.push("/signin");
    } else {
      getCategories();
      getNewProducts();
      featuredProducts();
      dispatch({
        type: SELECT_SEATS,
        dispatch: [],
      });
    }
  }, []);

  return (
    <div className="base-div container" onClick={() => setDisplaySearch(false)}>
      {console.log(productState)}
      {userState.isAuthenticated ? (
        <>
          <div className="search my-5">
            <div className="search-div container">
              <div>
                <Form
                  className="form-div"
                  onSubmit={(e) => handelSearchSubmit(e)}
                >
                  <sapn className="input-div">
                    <Input
                      onChange={(e) => setSearchTerm(e.target.value)}
                      value={searchTerm}
                      placeholder="Search..."
                    />
                  </sapn>
                  <span className="form-button" onClick={handelSearchSubmit}>
                    Submit
                  </span>
                </Form>
              </div>
              {displaySearch && (
                <div className="search-results">
                  {searchResult.length === 0 ? (
                    <span className="text-white">No Product Found!</span>
                  ) : (
                    searchResult.map((result) => (
                      <SearchResultCard
                        name={result.productName}
                        id={result.productId}
                        image={result.productImage}
                      />
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-center">CATEGORIES</h2>
              <div className="category-section">
                {categoryState.loading
                  ? ""
                  : categoryState.categories.map((cate) => (
                      <CategoryCard
                        name={cate.categoryName}
                        id={cate.categoryId}
                        history={history}
                      />
                    ))}
              </div>
            </div>
            <h2 className="text-center">FEATURED</h2>
            <div className="featured-section">
              {productState.featuredProducts ? (
                productState.featuredProducts.map((prods) => (
                  <Porduct
                    name={prods.productName}
                    id={prods.productId}
                    category={prods.category}
                    price={prods.pricePerSeat}
                    image={prods.productImage}
                  />
                ))
              ) : (
                <p>No Product Found!</p>
              )}
            </div>
          </div>
          <div className="border" />

          <div className="border" />
          <div>
            <h2 className="text-center">NEW ADDITIONS</h2>

            <div className="featured-section">
              {productState.newLoading
                ? ""
                : productState.newAddedProducts.map((prods) => (
                    <Porduct
                      name={prods.productName}
                      id={prods.productId}
                      category={prods.category}
                      price={prods.pricePerSeat}
                      image={prods.productImage}
                    />
                  ))}
            </div>
          </div>
        </>
      ) : (
        <NotAutenticated />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.user,
  categoryState: state.category,
  productState: state.product,
});

const mapDispatchToProps = {
  getCategories: () => getCategories(),
  getNewProducts: () => getNewProducts(),
  featuredProducts: () => featuredProducts(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
