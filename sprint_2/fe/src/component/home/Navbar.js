import {Link, NavLink} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import * as UserService from "../../service/userService";


const Navbar = () => {
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');

    // const { iconQuantity, setIconQuantity } = useContext(QuantityContext)
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

            {sessionStorage.getItem("USERNAME") === "nghia123" && (
                <>
                    <nav
                        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                        id="ftco-navbar" style={{height: "10%"}}
                    >
                        <div className="container" style={{marginTop: -13, marginRight: "22%"}}>
                            <a className="navbar-brand" href="/">
                               CowFarm
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
                                            href="/shop"
                                        >
                                            Shop
                                        </a>

                                    </li>

                                    <li className="nav-item active">
                                        <a href="/employee" className="nav-link">
                                            Employee
                                        </a>
                                    </li>
                                    <NavLink to={`/cart/${username}`}>
                                        <li className="nav-item cta cta-colored">

                                            {/*<a className="nav-link">*/}
                                            {/*    <span className="icon-shopping_cart"/>*/}
                                            {/*    [{iconQuantity}]*/}
                                            {/*</a>*/}


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
                               CowFarm
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
                                                href="/shop"
                                            >
                                                Shop
                                            </a>

                                        </li>


                                        <NavLink to={`/cart/${username}`}>
                                            <li className="nav-item cta cta-colored">

                                                {/*<a className="nav-link">*/}
                                                {/*    <span className="icon-shopping_cart"/>*/}
                                                {/*    [{iconQuantity}]*/}
                                                {/*</a>*/}


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
                                    HypeSneaker
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
                                                href="/shop"
                                            >
                                                Shop
                                            </a>

                                        </li>


                                        <li style={{width: 84}} className="nav-item">
                                            <a style={{marginTop: "-4%"}} href="/login" className="nav-link">
                                                <img style={{width: 25}}
                                                     src="https://o.remove.bg/downloads/b3a8cfa0-1b4d-4c26-bc4e-07adb1c203a6/avatar-removebg-preview.png"></img>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </>
                )
            }

        </>
    );
}

export default Navbar;