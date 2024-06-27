import React from 'react';
import Footer from '../Footer/Footer';
import './Blogs.css'

const Blogs = () => {
    return (
      <div >
        <div  class="accordion container footer-Check mt-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Difference between Authorization and Authentication
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
             Authorization : <br></br> 1. The process of determining whether a user has system access permissions is known as authorization. <br></br> 2.For instance, after we've established that a user is genuine, we may identify which sites the user has access to. Admin pages should not be accessible to ordinary users. This is where the authorization component comes in. <br />
              Authentication :  <br></br>1.Authentication is the process of confirming a user's identity. <br></br> 2.Consider the following scenario: a website has two sorts of users: normal and admins. We prompt users to check in when they want to access the website. This is where the authentication process begins.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Why are you using firebase? What other options do you have to implement authentication?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Many characteristics distinguish Google Firebase as a back-end development platform for online and mobile apps. This cuts down on stress and development time. And it is a perfect prototyping tool. Firebase is a straightforward, lightweight, user-friendly, and industry-recognized platform. That's why I'm a big fan of Google Firebase.
            </div>
          </div>
        </div>
        <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What other services does firebase provide other than authentication?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       
        App-building services <br></br>
        <ul>
       <li>Realtime database</li>
       <li>Cloud FireStore</li>
       <li>Hosting</li>
       <li>Authentications</li>
       </ul>
       Testing-managing services <br></br>
       <ul>
       <li>Test lab</li>
       <li>Performance monitoring</li>
       <li>App Distribution</li>
       </ul>
      </div>
    </div>
  </div>
        
      </div>
      <Footer></Footer>
      </div>
    );
};

export default Blogs;