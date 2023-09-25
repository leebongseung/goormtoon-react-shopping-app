import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../store/user/user.slice'
import { setCategory } from '../store/categories/categories.slice'
import styles from './Header.module.css'

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
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative' }}>
            <img
              src=""
              alt="장바구니"
              onClick={() => {
                navigate('../cart', { replace: true })
              }}
            />
            {CartProduct.length > 0 ? (
              <div style={{ position: 'absolute' }}>{CartProduct.length}</div>
            ) : (
              <></>
            )}
          </div>
          <img src="" alt="유저이모티콘" onClick={() => {}} />
          {user.email === '' ? (
            <img
              src=""
              alt="로그인"
              onClick={() => {
                navigate(`/login`)
              }}
            />
          ) : (
            <img src="" alt="로그아웃" onClick={handleSingout} />
          )}
        </div>
      </header>
    </>
  )
}

export default Header
