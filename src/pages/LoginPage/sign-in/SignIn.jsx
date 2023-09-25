import React from 'react'
import Form from '../../../components/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/user/user.slice'

const SignIn = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogin = (email,password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //유저 정보 전달해주는거 받아볼까요?
      console.log(userCredential);
      dispatch(setUser({
        email : userCredential.user.email, 
        id:userCredential.user.uid, 
        token: userCredential.user.refreshToken}))
      // console.log(userCredential)
      navigate('/');
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }
  return (
    <Form title={"로그인"}
    getDataForm={handleLogin}/>
  )
}

export default SignIn