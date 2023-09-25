import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCntCart, addItmCart } from '../store/cart'
import styles from './ContentList.module.css'

const ContentListsItem = ({ data, setCartItem }) => {
	let navigate = useNavigate()
	let dispatch = useDispatch()
	let cart = useSelector((state) => state.cart.products)
	// console.log(cart)

	const handleItmAddClick = () => {
		const count = 1
		const isFind =
			cart === undefined ? false : cart.find((itm) => itm.id === data.id)
		console.log(isFind)
		isFind
			? dispatch(addCntCart(data.id))
			: dispatch(addItmCart({ ...data, count }))
	}

	return (
		<div className={styles.ListItem}>
			<img
				className={styles.ListItm_img}
				onClick={() => {
					navigate(`/item?id=${data.id}`, { replace: true })
				}}
				src={data.image}
				alt="상품 이미지"
			></img>
			<div className={styles.ListItm_title}>{data.title}</div>
			<div className={styles.ListItm_buttonsAndPrice}>
				<button className={styles.ListItm_Button} onClick={handleItmAddClick}>
					장바구니 담기
				</button>
				<div className={styles.ListItm_Price}> ${data.price}</div>
			</div>
		</div>
	)
}

export default ContentListsItem
