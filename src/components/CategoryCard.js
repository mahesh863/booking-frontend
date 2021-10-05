import React from "react";

import "../css/CategoryCard.component.css";

const CategoryCard = ({ name, id, history }) => {
  const handelClick = () => {
    history.push(`/category/${id}/${name}`);
  };

  return (
    <div className="base-category" onClick={handelClick}>
      <p className="cate-name"> {name} </p>
    </div>
  );
};

export default CategoryCard;
