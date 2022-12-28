import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Service = ({service}) => {
    const { id, name,img,  description, price } = service;
    return (
        <div class="col">
        <div class="card h-100">
          <img src={img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p>Hire price : {price}</p>
            <CustomLink className='btn btn-success m-3' to='/checkout'>Check out </CustomLink>
          </div>
        </div>
      </div>
    );
};

export default Service;