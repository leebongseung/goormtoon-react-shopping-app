import React from 'react'
import ContentListsItem from './ContentListsItem'
import { useSelector } from 'react-redux'
import styles from './ContentList.module.css'

const ContentLists = () => {
	let { products, isloading } = useSelector((state) => state.products)
	console.log(isloading)

	let CategoryName = useSelector((state) => state.categories)
	console.log(CategoryName)

	const filterProducts = CategoryName
		? products.filter((data) => data.category === CategoryName)
		: products

	return (
		<div className={styles.contentList}>
			<div className={styles.contentList_count}>
				Showing : {filterProducts?.length}items
			</div>
			<div className={styles.contentList_Box}>
				{filterProducts?.map((data) => (
					<ContentListsItem data={data} key={data.id}></ContentListsItem>
				))}
			</div>
		</div>
	)
}

export default ContentLists
