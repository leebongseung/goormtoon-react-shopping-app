import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartCheckout = () => {
  let navigate= useNavigate();
  return (
    <>
      <div>
        <img src='' alt='장바구니 이미지'></img>
        <h2> Cart가 비었습니다.</h2>
        <div>Cart에 상품을 넣어주세요</div>
        <button onClick={()=>{navigate(`/`)}}> 계속 쇼핑하기</button>
      </div>
    </>
  )
}

export default CartCheckout