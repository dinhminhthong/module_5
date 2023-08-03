import {NavLink} from "react-router-dom";
import {CartContext} from  "../../context/CartContext"
import {useContext, useEffect, useState} from "react";

const Navbar  = () => {
    // const username = localStorage.getItem("username");
    // const account = JSON.parse(localStorage.getItem("account"));
    // const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    // const roles = [];
    // if (account != null) {
    //     for (let i = 0; i < account.roles.length; i++) {
    //         roles.push(account.roles[i].authority);
    //     }
    // }
    // const handleLogout = () => {
    //     localStorage.clear();
    //     window.location.href = "/";
    // };
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
            <a href="home.html" className="navbar-brand d-flex d-lg-none">
                <h1 className="m-0 display-4 text-secondary">
                    <span className="text-white">Farm</span>Fresh
                </h1>
            </a>npm
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <a href="home.html" className="nav-item nav-link active">
                        Home
                    </a>

                    <a className= "nav-item nav-link">
                        <NavLink to="/login" style={{color: "white"}}>Login</NavLink>
                    </a>
                    <a href="service.html" className="nav-item nav-link">
                        Service
                    </a>
                    {/*<a href="product.html" className="nav-item nav-link">*/}
                    {/*    Product*/}
                    {/*</a>*/}
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">
                                Blog Grid
                            </a>
                            <a href="detail.html" className="dropdown-item">
                                Blog Detail
                            </a>
                            <a href="feature.html" className="dropdown-item">
                                Features
                            </a>
                            <a href="team.html" className="dropdown-item">
                                The Team
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Testimonial
                            </a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">
                        Contact
                    </a>
                    <a>
                        <NavLink to='/test'>
                            <CartContext.Consumer>
                                { ({cartItems}) => {
                                    if(cartItems) {
                                        cartItems.map((i)=> {
                                            console.log(i.productName);
                                        })
                                    }
                                    console.log(cartItems)
                                    return ( <div className="nav-item nav-link">
                                        Cart ({cartItems.length})

                                    </div>)
                                }
                                }
                            </CartContext.Consumer>
                        </NavLink>
                    </a>
                </div>
            </div>
            <div><a className="nav-item nav-link" style={{color:"white",fontSize:20}}>
                   {sessionStorage.getItem("USERNAME")}
            </a></div>
        </nav>
    )
}

export default Navbar;