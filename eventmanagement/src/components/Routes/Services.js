import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service/Service';
import Footer from '../Footer/Footer';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('act.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            
        <div   className='container mt-5 footer-check'>
        <h1 className='mt-5 mb-5 text-center'>Services</h1>
           <div class="row row-cols-1 row-cols-md-3 g-4">
               {
                   services.map(service=>
                       <Service key={service.id} service={service}></Service>
                   )
               }
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Services;