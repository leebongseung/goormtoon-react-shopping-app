import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CartCheckoutPage.module.css'
import CartIcon from '../../icons/cart1.svg'

const CartCheckout = () => {
	let navigate = useNavigate()
	return (
		<>
			<div className={styles.CartCheckoutBox}>
				<img
					className={styles.CartCheckoutBox__img}
					src={CartIcon}
					alt="장바구니 이미지"
				></img>
				<h2 className={styles.CartCheckoutBox__h2}> Cart가 비었습니다.</h2>
				<div className={styles.CartCheckoutBox__info}>
					Cart에 상품을 넣어주세요
				</div>
				<button
					className={styles.CartCheckoutBox__HomeButton}
					onClick={() => {
						navigate(`/`)
					}}
				>
					{' '}
					계속 쇼핑하기
				</button>
			</div>
		</>
	)
}

export default CartCheckout
