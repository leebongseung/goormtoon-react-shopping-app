import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './Form.module.css'

const Form = ({ title, getDataForm }) => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: 'onBlur' })

	const onSubmit = ({ email, password }) => {
		console.log(email, email.length, typeof email)
		console.log(password, password.length, typeof password)
		getDataForm(email, password)
	}

	const userEmail = {
		required: '필수 필드입니다.',
	}

	console.log(errors)

	const userPassword = {
		required: '필수 필드입니다.',
		minLength: {
			value: 6,
			message: '최소 6자입니다.',
		},
	}

	return (
		<div className={styles.body}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.form__layout}>
					<div className={styles.form__inputBox}>
						<input
							className={styles.form__inputTag}
							type="email"
							placeholder="email 입력하세요"
							{...register('email', userEmail)}
						></input>
						{errors?.email && (
							<div className={styles.form__WarningMsg}>
								<span>*{errors?.email?.message}</span>
							</div>
						)}
					</div>
					<div className={styles.form__inputBox}>
						<input
							className={styles.form__inputTag}
							type="password"
							placeholder="비밀번호를 입력하세요"
							{...register('password', userPassword)}
						></input>
						{errors?.password && (
							<div className={styles.form__WarningMsg}>
								<span>*{errors?.password?.message}</span>
							</div>
						)}
					</div>
					<button className={styles.form__Button} type="submit">
						{title}
					</button>
					<div className={styles.form__infoRequest}>
						계정이 없습니까?
						<button
							className={styles.from__infoButton}
							onClick={() => {
								navigate(`/register`)
							}}
						>
							가입하기
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form
