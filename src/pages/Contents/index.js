import React, { useEffect, useState } from "react";
import ContentLists from "../../components/ContentLists";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/products.slice";
import ContentButton from "./ContentButton";
import { CategoriesName } from "../../store/categories/categories.slice";
import { useLocation } from "react-router-dom";

const Contents = ({ setCartItem, cartItem }) => {
  console.log("contens page render");
  const [filter, setFilter] = useState();
  let user = useSelector((state) => state.user);
  console.log("유저 정보 :" + user.id, user.token, user.email)


  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  let dispatch = useDispatch();

  let { products, isLoading } = useSelector((state) => {
    return state.products;
  });
  console.log(products, isLoading);

  useEffect(() => {
    dispatch(fetchProducts());

    return () => {};
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div>
        <ContentButton text={"모두"} CategoryName={CategoriesName.All} />
        <ContentButton
          text={"전자기기"}
          CategoryName={CategoriesName.electronics}
        />
        <ContentButton text={"쥬얼리"} CategoryName={CategoriesName.jewelery} />
        <ContentButton
          text={"남성의류"}
          CategoryName={CategoriesName.mensClothing}
        />
        <ContentButton
          text={"여성의류"}
          CategoryName={CategoriesName.womensClothing}
        />
      </div>
      <ContentLists
        cartItem={cartItem}
        setCartItem={setCartItem}
      ></ContentLists>
    </>
  );
};

export default Contents;
