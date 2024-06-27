import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import {AiOutlineEye} from  "react-icons/ai";
import {useCreateUserWithEmailAndPassword,useSignInWithGoogle, useUpdateProfile,} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css'
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";

const SignUp = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [showPass,setShowPass] = useState(false);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate()
    const newName = useRef("");
    const newEmail = useRef("");
    const newPassword = useRef("");
    const newConfirmPassword = useRef("")

    const togglePasswordOne = () => {
        setShowPass(!showPass)
    }
    const togglePasswordTwo = () => {
        setShowPass(!showPass)
    }
    const submitted = async (event) => {
    event.preventDefault();
    const name = newName.current.value;
    const email = newEmail.current.value;
    const password = newPassword.current.value;
    const confirmPass = newConfirmPassword.current.value;
        if (password === confirmPass) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({displayName:name});
            navigate('/login');
            toast('Thank you for registration')
          } else {
            toast("password did not matched");
          }

  };
  if(loading || loading1){
    return <Loading></Loading>;
  }
  let errorElement ;
  if(error || error1){
     errorElement = <p>{error?.message}{error1?.message}</p>
  }
  return (
    <div>
    <div style={{height : '75vh'}} className=" container">
        <h1 className="text-center text-warning">Sign Up</h1>
    <div className="w-75 mx-auto p-3">
      <Form className="my-2" onSubmit={submitted}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={newName}
            type="name"
            placeholder="Enter name"
            className="py-2 fs-4"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control required className="py-2 fs-4" ref={newEmail} type="email" placeholder="Enter email address" />
        </Form.Group>
        <Form.Group className="mb-3 positionOne" controlId="formBasicPassword">
          <Form.Control
            ref={newPassword}
            type={showPass ? "text" : "password"} 
            placeholder="Enter  password "
            className="py-2 fs-4"
            required
          />
         
        </Form.Group>
        <Form.Group className="mb-3 positionOne" controlId="formBasicPassword">
          <Form.Control
            ref={newConfirmPassword}
            type={showPass ? "text" : "password"}
            placeholder="Confirm password"
            className="py-2 fs-4"
            required
          />
          <p style={{cursor:'pointer'}} className="bg-white border-0  positionTwo" onClick={togglePasswordTwo}><AiOutlineEye></AiOutlineEye></p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className="text-info" onClick={()=>{setAgree(!agree)}} type="checkbox" name="terms" label="Accept the terms and conditions" />
        </Form.Group>
        {errorElement}
        <div className="mx-auto d-flex justify-content-center  ">
        <Button disabled={!agree} className="w-50 fs-4 rounded-pill " variant="success" type="submit">
          Sign Up
        </Button>
        </div>
      </Form>
    </div>
    <div className="my-2 pb-5 w-75 mx-auto">
        <div className="text-center"> <Link className="text-decoration-none text-success" to='/login'>Already Have an account ?</Link></div>
        <div className="d-flex align-items-center">
          
          <p className="pt-3 px-3 fw-bold mx-auto">OR</p>
          
        </div>
        <div className="text-center mt-3 py-1">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-light"
            style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
          >
            <span className="fs-3">
              <FcGoogle></FcGoogle>
            </span>{" "}
            <span className="fs-4 text-muted">
              Continue with google
            </span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
    <Footer></Footer>
    </div>
  );
};

export default SignUp;
