import {Link, NavLink} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import * as UserService from "../../service/userService";
import {QuantityContext} from "./QuantityContext";


const Navbar = () => {
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const roles = sessionStorage.getItem('roles');


    const { iconQuantity, setIconQuantity } = useContext(QuantityContext)
    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);
    const logout = () => {
        sessionStorage.removeItem("TOKEN");
        sessionStorage.removeItem("USERNAME");
        sessionStorage.removeItem("roles");
        window.location.href = '/';
    };


    return (
        <>
            <div className="position-fixed w-100" style={{ zIndex:"1000"}}>


            {roles === "ADMIN"  &&(
                <>
                    <nav
                        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                        id="ftco-navbar" style={{height: "10%"}}
                    >
                        <div className="container" style={{marginTop: -13, marginRight: "22%"}}>
                            <a className="navbar-brand" href="/">
                               <img style={{width:"100px"}} src="https://o.remove.bg/downloads/bae24b2d-4525-4af8-a027-5a9427f87457/images-removebg-preview.png"/>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#ftco-nav"
                                aria-controls="ftco-nav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="oi oi-menu"/> Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav"
                                 style={{marginLeft: "38%", marginRight: "-29%"}}>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a href="/" className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link "
                                            href="/product"
                                        >
                                            Product
                                        </a>

                                    </li>

                                    <li className="nav-item active">
                                        <a href="/employee" className="nav-link">
                                            Employee
                                        </a>
                                    </li>
                                    <NavLink to={`/cart/${username}`}>
                                        <li className="nav-item cta cta-colored">

                                            <a className="nav-link">
                                                <i  className="fa">&#xf07a;</i>
                                                [{iconQuantity}]
                                            </a>


                                        </li>
                                    </NavLink>


                                    <li className="nav-item">
                                        <a className="nav-link"
                                           style={{color: "red"}}>{sessionStorage.getItem("USERNAME")}</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color: "red"}} onClick={() => logout()}>Log
                                            out</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>

                    </nav>

                </>
            )
            }

            {
                sessionStorage.getItem("roles") === "USER" && (
                    <>
                        <nav
                            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                            id="ftco-navbar" style={{height: "10%"}}
                        >
                            <div className="container" style={{marginTop: -13, marginRight: "22%"}}>
                                <a className="navbar-brand" href="/">
                                    <img style={{width:"100px"}} src="https://o.remove.bg/downloads/bae24b2d-4525-4af8-a027-5a9427f87457/images-removebg-preview.png"/>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#ftco-nav"
                                    aria-controls="ftco-nav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="oi oi-menu"/> Menu
                                </button>
                                <div className="collapse navbar-collapse" id="ftco-nav"
                                     style={{marginLeft: "38%", marginRight: "-29%"}}>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a href="/" className="nav-link">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link "
                                                href="/product"
                                            >
                                                Product
                                            </a>

                                        </li>


                                        <NavLink to={`/cart/${username}`}>
                                            <li className="nav-item cta cta-colored">
                                                <a className="nav-link">
                                                    <i  className="fa">&#xf07a;</i>
                                                    [{iconQuantity}]
                                                </a>
                                            </li>
                                        </NavLink>

                                        <li className="nav-item">
                                            <a className="nav-link"
                                               style={{color: "red"}}>{sessionStorage.getItem("USERNAME")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" style={{color: "red"}} onClick={() => logout()}>Log
                                                out</Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                        </nav>

                    </>
                )
            }
            {
                !sessionStorage.getItem("TOKEN") && (
                    <>
                        <nav
                            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                            id="ftco-navbar" style={{height: "10%"}}
                        >
                            <div className="container" style={{marginTop: -13, marginRight: "22%"}}>
                                <a className="navbar-brand" href="/">
                                    <img style={{width:"100px"}} src="https://o.remove.bg/downloads/bae24b2d-4525-4af8-a027-5a9427f87457/images-removebg-preview.png"/>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#ftco-nav"
                                    aria-controls="ftco-nav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="oi oi-menu"/> Menu
                                </button>
                                <div className="collapse navbar-collapse" id="ftco-nav"
                                     style={{marginLeft: "38%", marginRight: "-29%"}}>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a href="/" className="nav-link">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link "
                                                href="/product"
                                            >
                                                Product
                                            </a>

                                        </li>
                                        <li style={{width: 84}} className="nav-item">
                                            <a style={{marginTop: "-4%"}} href="/login" className="nav-link">
                                                <img style={{width: 25}}
                                                     src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"/>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </>
                )
            }
            </div>

        </>
    );
}

export default Navbar;