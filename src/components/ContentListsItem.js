import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCntCart, addItmCart } from "../store/cart";

const ContentListsItem = ({ data, setCartItem }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.products);
  // console.log(cart)

  const handleItmAddClick = () => {
    const count = 1;
    const isFind = cart === undefined? false : cart.find((itm) => itm.id === data.id);
    console.log(isFind)
    isFind
      ? dispatch(addCntCart(data.id))
      : dispatch(addItmCart({ ...data, count }));
  };

  return (
    <div>
      <img
        onClick={() => {
          // console.log(`/item?id=${data.id}`);
          navigate(`/item?id=${data.id}`, { replace: true });
        }}
        style={{ width: "100px" }}
        src={data.image}
        alt='상품 이미지'
      ></img>
      <div>{data.title}</div>
      <div style={{ display: "flex" }}>
        <button onClick={handleItmAddClick}>장바구니 담기</button>
        <div> ${data.price}</div>
      </div>
    </div>
  );
};

export default ContentListsItem;
