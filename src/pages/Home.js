import React, { useEffect } from "react";
import { Form, Input } from "reactstrap";
import CategoryCard from "../components/CategoryCard";

//Components
import Porduct from "../components/PorductCard";
import SearchResultCard from "../components/SearchResultCard";

//Css
import "../css/Home.page.css";

//Redux
import { connect } from "react-redux";
import NotAutenticated from "../components/NotAutenticated";

const Home = ({ userState, history }) => {
  const handelSearchSubmit = (e) => {
    e.preventDefault();
    console.log(">> Submitted!");
  };

  useEffect(() => {
    if (!userState.isAuthenticated) {
      history.push("/signin");
    }
  }, []);

  return (
    <div className="base-div container ">
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
                    <Input placeholder="Search..." />
                  </sapn>
                  <span className="form-button" onClick={handelSearchSubmit}>
                    Submit
                  </span>
                </Form>
              </div>
              {/* <div className="search-results">
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
          </div> */}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-center">CATEGORIES</h2>
              <div className="category-section">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
              </div>
            </div>
            <h2 className="text-center">FEATURED</h2>
            <div className="featured-section">
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
            </div>
          </div>
          <div className="border" />

          <div className="border" />
          <div>
            <h2 className="text-center">NEW ADDITIONS</h2>

            <div className="featured-section">
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
              <Porduct />
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
});

export default connect(mapStateToProps)(Home);
