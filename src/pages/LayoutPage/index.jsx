import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import styles from './LayoutPage.module.css'

const LayoutPage = () => {
	return (
		<>
			<div className={styles.page}>
				<Header />
				<Outlet />
				<Footer className={styles.footer} />
			</div>
		</>
	)
}

export default LayoutPage
