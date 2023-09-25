import React from "react";
import { useDispatch } from "react-redux";
import { addCntCart, minusCntCart, removeCart } from "../../../store/cart";
import { useLocation } from "react-router-dom";

const CartListItem = ({ data }) => {
  let dispatch = useDispatch();
  
  const handleplusCount = () => {
    dispatch(addCntCart(data.id));
  };

  const handleminusCount = () => {
    dispatch(minusCntCart(data.id));
  };
  const handleRemoveItm = () => {
    dispatch(removeCart(data.id))
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={data.image} alt='상품이미지' style={{ width: "50px" }}></img>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{data.category}</div>
        <div>{data.title}</div>
        <div>
          {data.price} x {data.count} = $ {data.price * data.count}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifySelf: "flex-end",
        }}
      >
        <button
          disabled={data.count === 1 ? true : false}
          onClick={handleminusCount}
        >
          -
        </button>
        <div>{data.count}</div>
        <button onClick={handleplusCount}>+</button>
      </div>
      <img src="" alt="삭제 버튼" onClick={handleRemoveItm}></img>
    </div>
  );
};

export default CartListItem;
