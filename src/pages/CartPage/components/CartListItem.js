import React from 'react'
import { useDispatch } from 'react-redux'
import { addCntCart, minusCntCart, removeCart } from '../../../store/cart'
import styles from '../CartPage.module.css'
import DeleteIcon from '../../../icons/delete.svg'

const CartListItem = ({ data }) => {
	let dispatch = useDispatch()

	const handleplusCount = () => {
		dispatch(addCntCart(data.id))
	}

	const handleminusCount = () => {
		dispatch(minusCntCart(data.id))
	}
	const handleRemoveItm = () => {
		dispatch(removeCart(data.id))
	}

	return (
		<div className={styles.cartListBox}>
			<div className={styles.cartListBox__ImgBox}>
				<img
					className={styles.cartListBox__Img}
					src={data.image}
					alt="상품이미지"
				></img>
			</div>
			<div className={styles.cartListBox__Info}>
				<div className={styles.cartListBox__Info__Category}>
					{data.category}
				</div>
				<div className={styles.cartListBox__Info__Title}>{data.title}</div>
				<div className={styles.cartListBox__Info__Price}>
					{data.price} x {data.count} = $ {(data.price * data.count).toFixed(2)}
				</div>
			</div>
			<div className={styles.cartListBox__Buttons}>
				<button
					className={`${styles.cartListBox__Button} ${
						data.count === 1 ? styles.unuseable : styles.useable
					}`}
					disabled={data.count === 1 ? true : false}
					onClick={handleminusCount}
				>
					-
				</button>
				<div className={`${styles.cartListBox__Button} ${styles.unuseable}`}>
					{data.count}
				</div>
				<button
					className={`${styles.cartListBox__Button} ${styles.useable}`}
					onClick={handleplusCount}
				>
					+
				</button>
			</div>
			<img
				className={styles.cartListBox__RemoveBtn}
				src={DeleteIcon}
				alt="삭제 버튼"
				onClick={handleRemoveItm}
			></img>
		</div>
	)
}

export default CartListItem
