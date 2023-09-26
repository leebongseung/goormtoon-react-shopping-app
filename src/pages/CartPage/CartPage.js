import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartListItem from './components/CartListItem'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../store/cart'
import styles from './CartPage.module.css'

function CartPage() {
	const cartItem = useSelector((state) => state.cart.products)
	let navigate = useNavigate()
	let dispatch = useDispatch()

	const totalPrice = () => {
		return cartItem.reduce((sum, Itm) => {
			return (sum += Itm.price * Itm.count)
		}, 0)
	}

	const handleCheckout = () => {
		dispatch(clearCart())
		navigate(`/CartCheckout`, { replace: true })
	}

	return (
		<>
			<div className={styles.cartbody}>
				<h1 className={styles.title}>장바구니</h1>
				<div className={styles.cartList} id="CartList">
					{cartItem.map((data) => {
						return <CartListItem data={data} key={data.id}></CartListItem>
					})}
				</div>
				<div className={styles.buttons}>
					<div className={styles.cartTotalPrice}>
						합계 : $ {totalPrice().toFixed(2)}
					</div>
					<button className={styles.submitButton} onClick={handleCheckout}>
						계산하기
					</button>
				</div>
			</div>
		</>
	)
}

export default CartPage
