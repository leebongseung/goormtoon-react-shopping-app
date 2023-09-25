import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../store/categories/categories.slice'
import styles from './Contents.module.css'

const ContentButton = ({ text, CategoryName }) => {
	let dispatch = useDispatch()
	let CurCategory = useSelector((state) => {
		return state.categories
	})

	const handleOnClick = () => {
		dispatch(setCategory(CategoryName))
		// console.log(CategoryName);
	}

	return (
		<>
			<button
				className={`${styles.button} ${
					CurCategory === CategoryName ? styles.selected : styles.unselected
				}`}
				onClick={handleOnClick}
			>
				{text ? text : '에러처리해야함'}
			</button>
		</>
	)
}

export default ContentButton
