import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addItmCart } from '../../store/cart'
import { useEffect, useState } from 'react'
import styles from './ItemDetailPage.module.css'

const ItemDetailPage = () => {
	const [isCart, setIsCart] = useState(false)

	const useQuery = () => {
		return new URLSearchParams(useLocation().search)
	}

	const searchItmId = parseInt(useQuery().get('id'))

	useEffect(() => {
		const isInCart =
			CartProducts === undefined
				? false
				: CartProducts?.map((data) =>
						data.id === searchItmId ? true : false,
				  ).reduce((acc, data) => acc || data, false)
		setIsCart(isInCart)

		return () => {}
	}, [])

	let products = useSelector((state) => state.products.products)
	let CartProducts = useSelector((state) => state.cart.products)
	let dispatch = useDispatch()
	let navigate = useNavigate()
	console.log(products)

	const [SearchData] = Object.values(
		Object.values(products.filter((data) => data.id === searchItmId)),
	)

	const handleAddCart = () => {
		const res = isCart
			? undefined
			: dispatch(addItmCart({ ...SearchData, count: 1 }))
		setIsCart(true)
		return
	}

	console.log('아이템디테일 페이지 : ' + SearchData.id)

	return (
		<>
			<div className={styles.ItmDetailBox}>
				<div className={styles.ItmDetailBox__left}>
					<img
						className={styles.ItmDetailBox__Img}
						src={SearchData.image}
						alt="상품이미지"
					></img>
				</div>
				<div className={styles.ItmDetailBox__right}>
					<div className={styles.ItmDetailBox__category}>
						{SearchData.category}
					</div>
					<div className={styles.ItmDetailBox__title}>{SearchData.title}</div>
					<div className={styles.ItmDetailBox__price}>$ {SearchData.price}</div>
					<div className={styles.ItmDetailBox__description}>
						$ {SearchData.description}
					</div>
					<div className={styles.buttons}>
						<button
							className={`${
								isCart
									? styles.ItmDetailBox__button
									: styles.ItmDetailBox__cartIn
							}`}
							onClick={handleAddCart}
						>
							{isCart ? '장바구니에 담긴 제품' : '장바구니에 담기'}
						</button>
						<button
							className={styles.ItmDetailBox__button}
							onClick={() => {
								navigate(`/cart`, { replace: true })
							}}
						>
							장바구니로 이동
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetailPage
