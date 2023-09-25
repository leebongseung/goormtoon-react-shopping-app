import { useDispatch, useSelector } from "react-redux";
import CartListItem from "./components/CartListItem";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cart";

function CartPage() {
  const cartItem = useSelector((state) => state.cart.products);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const totalPrice = () => {
    return cartItem.reduce((sum, Itm) => {
      return (sum += Itm.price * Itm.count);
    }, 0);
  };

  const handleCheckout = () =>{
    dispatch(clearCart());
    navigate(`/CartCheckout`, { replace: true });
  }

  return (
    <>
      <hr />
      <h1>장바구니</h1>
      <div id="CartList">
        {cartItem.map((data) => {
          return (
            <CartListItem
              data={data}
              key={data.id}
            ></CartListItem>
          );
        })}
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div>합계 : $ {totalPrice()}</div>
        <button onClick={handleCheckout}> 계산하기</button>
      </div>
    </>
  );
}

export default CartPage;
