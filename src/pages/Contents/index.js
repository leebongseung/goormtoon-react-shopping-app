import React, { useEffect } from 'react'
import ContentLists from '../../components/ContentLists'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/products.slice'
import ContentButton from './ContentButton'
import { CategoriesName } from '../../store/categories/categories.slice'
import styles from './Contents.module.css'

const Contents = () => {
	console.log('contens page render')
	let user = useSelector((state) => state.user)
	console.log('유저 정보 :' + user.id, user.token, user.email)

	let dispatch = useDispatch()

	let { products, isLoading } = useSelector((state) => {
		return state.products
	})
	console.log(products, isLoading)

	useEffect(() => {
		dispatch(fetchProducts())

		return () => {}
	}, [])

	return (
		<div className={styles.products}>
			<h1 className={styles.h1}>Products</h1>
			<div className={styles.categories}>
				<ContentButton text={'모두'} CategoryName={CategoriesName.All} />
				<ContentButton
					text={'전자기기'}
					CategoryName={CategoriesName.electronics}
				/>
				<ContentButton text={'쥬얼리'} CategoryName={CategoriesName.jewelery} />
				<ContentButton
					text={'남성의류'}
					CategoryName={CategoriesName.mensClothing}
				/>
				<ContentButton
					text={'여성의류'}
					CategoryName={CategoriesName.womensClothing}
				/>
			</div>
			<ContentLists></ContentLists>
		</div>
	)
}

export default Contents
