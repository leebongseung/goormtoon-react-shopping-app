import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/categories/categories.slice";

const ContentButton = ({ text, CategoryName }) => {
  let dispatch = useDispatch();
  let CurCategory = useSelector((state) => {
    return state.categories;
  });

  const handleOnClick = () => {
    dispatch(setCategory(CategoryName));
    // console.log(CategoryName);
  };

  return (
    <>
      <button
        style={{
          backgroundColor: `${
            CurCategory === CategoryName ? "gray" : "white"
          }`,
        }}
        className="button selected"
        onClick={handleOnClick}
      >
        {text ? text : "에러처리해야함"}
      </button>
    </>
  );
};

export default ContentButton;
