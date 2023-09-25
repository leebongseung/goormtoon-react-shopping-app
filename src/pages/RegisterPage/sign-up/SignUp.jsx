import React from 'react'
import Form from '../../../components/Form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from '../../../firebase';

const SignUp = () => {

  const handleSignupAndLogin = (email, password) =>{
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
  })};


  
  return (
    <Form 
      title ={"가입하기"}
      getDataForm={handleSignupAndLogin}
    />
  )
}

export default SignUp