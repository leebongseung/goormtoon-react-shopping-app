import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addItmCart } from "../../store/cart";
import { useEffect, useState } from "react";

const ItemDetailPage = () => {
  const [isCart, setIsCart] = useState(false)

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const searchItmId = parseInt(useQuery().get("id"));

  useEffect(() => {
    const isInCart = CartProducts === undefined? false :  CartProducts?.map((data) => data.id === searchItmId? true: false).reduce((acc, data) => acc||data, false);
    setIsCart(isInCart);
  
    return () => {
    
    }
  }, [])

  let products = useSelector((state) => state.products.products);
  let CartProducts = useSelector((state) => state.cart.products);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(products)

  const [SearchData] = Object.values(
    Object.values(products.filter((data) => data.id === searchItmId))
  );
  
  const handleAddCart =() => {
    const res = isCart ? undefined : dispatch(addItmCart(SearchData))
    setIsCart(true)
    return;
  }

  console.log("아이템디테일 페이지 : " + SearchData.id);

  return (
    <>
      <div>
        <img
          style={{ width: "150px" }}
          src={SearchData.image}
          alt='상품이미지'
        ></img>
        <div>
          <div>{SearchData.category}</div>
          <div>{SearchData.title}</div>
          <div>$ {SearchData.price}</div>
          <div>$ {SearchData.description}</div>
          <div>
            <button onClick={handleAddCart}>{isCart? "장바구니에 담긴 제품": "장바구니에 담기" }</button>
            <button onClick={()=> {navigate(`/cart`,{ replace: true })}}>장바구니로 이동</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailPage;
