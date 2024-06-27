import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
            signOut(auth);
    }
    return (
        <Navbar className="p-3 sticky-top nav bg-success  " expand="lg">
           
                <Navbar.Brand className=" fw-bolder text-info fs-2" href="#home">
                   Wedding  Clicker
                </Navbar.Brand>
                <Navbar.Toggle className="order-3 order-md-2"aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="order-3 order-md-2" id="basic-navbar-nav">
                    <Nav className="Text-size mx-auto d-flex align-items-md-center">
                        <Nav.Link>
                            <CustomLink as={Link} className="p-2 text-decoration-none" to="/">
                                Home
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            <CustomLink as={Link}className="p-2 text-decoration-none"to="/services">
                                Services
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            {" "}
                            <CustomLink as={Link}className="p-2 text-decoration-none"to="/checkout">
                                Check Out
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            <CustomLink as={Link}className="p-2 text-decoration-none"to="/blogs">
                                Blogs
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            <CustomLink as={Link}className="p-2 text-decoration-none"to="/about">
                                About
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                        {
                    user? (               
                   
                        <p style={{paddingLeft :'150px'}}>
                           <p className="text-light" > {user.displayName}</p>
                        <Button  className="w-100 btn btn-light text-dark " onClick={handleSignOut}>Sign out</Button>
                        </p>
                   ):
                    (<Nav.Link className="order-md-3"><Link className="nav-link fw-bold fs-4 text-light" to='/login'>Log in</Link></Nav.Link>)
                }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               
           
        </Navbar>
    );
};

export default Header;
