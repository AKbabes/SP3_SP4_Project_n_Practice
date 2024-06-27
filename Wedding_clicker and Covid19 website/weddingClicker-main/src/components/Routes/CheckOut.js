import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';

const CheckOut = () => {
    const handleCheckout =(event)=>{
        event.preventDefault()
        toast('Confirmed')

    }
    return (
      <div>
        <Form style={{marginTop : '100px',height :'66vh'}} className='container'onSubmit={handleCheckout}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control required type="text" placeholder="Enter address" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required type="text" placeholder="Phone number" />
          
        </Form.Group>
        
    <div className='text-center w-100 '>
        <Button variant="success " className='fs-4' type="submit">
          Submit
        </Button>
        </div>
        <ToastContainer/>
      </Form>
      <Footer></Footer>
      </div>
       
    );
};

export default CheckOut;