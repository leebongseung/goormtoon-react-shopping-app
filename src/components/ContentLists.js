import React from "react";
import ContentListsItem from "./ContentListsItem";
import { useSelector } from "react-redux";

const ContentLists = () => {
  let { products, isloading } = useSelector((state) => state.products);
  console.log(isloading);

  let CategoryName = useSelector((state) => state.categories);
  console.log(CategoryName);

  const filterProducts = CategoryName
    ? products.filter((data) => data.category === CategoryName)
    : products;

  return (
    <div>
      <div>Showing : {filterProducts?.length}items</div>
      <div id='Content__Lists' style={{ display: "flex", flexWrap: "wrap" }}>
        {filterProducts?.map((data) => (
          <ContentListsItem
            data={data}
            key={data.id}
          ></ContentListsItem>
        ))}
      </div>
    </div>
  );
};

export default ContentLists;
