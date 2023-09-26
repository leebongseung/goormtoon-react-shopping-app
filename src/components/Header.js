import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../store/user/user.slice'
import { setCategory } from '../store/categories/categories.slice'
import styles from './Header.module.css'
import CartIcon from '../icons/cart1.svg'
import UserIcon from '../icons/user.svg'
import LoginIcon from '../icons/login.svg'
import LogoutIcon from '../icons/logout.svg'

const Header = () => {
	let navigate = useNavigate()
	let dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const CartProduct = useSelector((state) => state.cart.products)

	console.log('카트개수' + CartProduct.length)

	const handleSingout = () => {
		dispatch(removeUser())
		navigate(`/`)
	}
	return (
		<>
			<header className={styles.header}>
				<h1
					className={styles.h1}
					style={{ color: 'blueviolet' }}
					onClick={() => {
						dispatch(setCategory(''))
						navigate('../', { replace: true })
					}}
				>
					Shop
				</h1>
				<div className={styles.Buttons}>
					<div className={styles.Button__cart}>
						<img
							src={CartIcon}
							alt="장바구니"
							onClick={() => {
								navigate('../cart', { replace: true })
							}}
						/>
						{CartProduct.length > 0 ? (
							<div className={styles.Button__cart__count}>
								{CartProduct.length}
							</div>
						) : (
							<></>
						)}
					</div>
					<img src={UserIcon} alt="유저이모티콘" onClick={() => {}} />
					{user.email === '' ? (
						<img
							src={LoginIcon}
							alt="로그인"
							onClick={() => {
								navigate(`/login`)
							}}
						/>
					) : (
						<img src={LogoutIcon} alt="로그아웃" onClick={handleSingout} />
					)}
				</div>
			</header>
		</>
	)
}

export default Header
