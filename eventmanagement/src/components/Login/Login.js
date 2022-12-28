import React, { memo, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import {AiOutlineEye} from  "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";

const Login = memo(() => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [showPass,setShowPass] = useState(false);
      const navigate = useNavigate()
      const userEmail = useRef('');
      const userPassword = useRef('');
      const location = useLocation()
      let from = location.state?.from?.pathname || '/';
      
      if(user || googleUser){
          navigate(from,{replace:true});
      }

      const handleLogin = async (event) =>{
          event.preventDefault()
          const email = userEmail.current.value;
          const password = userPassword.current.value;
          await signInWithEmailAndPassword(email,password)
          toast('login')
      }
      const ShowPassword = () =>{
          setShowPass(!showPass)
      }
      if(loading || googleLoading || sending){
        return <Loading></Loading>;
      }
      let errorElement ;
      if(error || googleError){
         errorElement = <p>{error?.message}{googleError?.message}</p>
      }
      const resetPassword = async () =>{
        console.log(user);
        const email = userEmail.current.value;
        if(email){
        await sendPasswordResetEmail(email);
        toast('Email sent')
        }
        else{
          toast('Please enter mail')
        }
      }
  return (
    <div>
    <div style={{height :'75vh'}} className="">
        <h1 className="text-center my-3 text-success">Log in</h1>
      <div className="p-3">
      <Form onSubmit={handleLogin} className='mx-auto w-75' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="py-3" required ref={userEmail} type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group style={{position:'relative'}} className="mb-3" controlId="formBasicPassword">
          <Form.Control className="py-3" required ref={userPassword} type={showPass ? "text" : "password"} placeholder="enter your password" />
          <p className="border-0 bg-white" style={{position:'absolute',top:'15px',right:'5px',cursor:'pointer'}} onClick={ShowPassword}><AiOutlineEye></AiOutlineEye></p>
        </Form.Group>
        {errorElement}
        <Button className="w-25 rounded-pill py-2 mx-auto d-block fw-bold" variant="success" type="submit">
          Log in
        </Button>
      </Form>
      <div className="my-2 pb-5 w-75 mx-auto">
        <div style={{height:'120px'}} className="mx-auto mt-5 text-center d-flex align-items-center  flex-column justify-content-center rounded fs-5 fw-bold bg-secondary w-25 p-1  ">New user ? <br></br> <Link className="text-decoration-none text-warning" to='/signup'>Create an account</Link></div>
        <div className="text-center"><button className="text-decoration-none fw-bold btn btn-link text-danger" onClick={resetPassword}>Forget Password ?</button></div>
        <div className="d-flex align-items-center">
          
          <p className="pt-3 px-3 fs-4 mx-auto fw-bold">Another way</p>
          
        </div>
        <div className="text-center mt-3 py-1">
          <button onClick={() => signInWithGoogle()}className="btn btn-dark text-light rounded-pill" >
            <span className="fs-3">
              <FcGoogle></FcGoogle>
            </span>{" "}
            <span className="fs-4  ">
              Continue with google
            </span>
          </button>
        </div>
      </div>
      </div>
      <ToastContainer/>
      </div>
      <Footer></Footer>
    </div>
  );
});

export default Login;
