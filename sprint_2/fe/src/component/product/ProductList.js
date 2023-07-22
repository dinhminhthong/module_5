import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {findAll} from "../../service/ProductService";

function ProductList() {
    const [product,setProduct] = useState([]);
    // const [itemsToShow, setItemsToShow] = useState(8); // Số sản phẩm hiển thị ban đầu
    // const [itemsPerLoad, setItemsPerLoad] = useState(4);
    useEffect(()=>{
        const getALl = async ()=>{
            let rs = await findAll()
            setProduct(rs)
        }
        getALl()
    },[]);
    // const handleLoadMore = () => {
    //     setItemsToShow(prevItems => prevItems + itemsPerLoad);
    // };

return(
    <>
        <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5 py-3 align-items-center">
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-start">
                        <i className="bi bi-phone-vibrate fs-1 text-primary me-2"/>
                        <h2 className="mb-0">+0703510324</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="home.html" className="navbar-brand ms-lg-5">
                            <h1 className="m-0 display-4 text-primary">
                                <span className="text-secondary">Cow</span>Farm
                            </h1>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-end">
                        <a
                            className="btn btn-primary btn-square rounded-circle me-2"
                            href="#"
                        >
                            <i className="fab fa-twitter"/>
                        </a>
                        <a
                            className="btn btn-primary btn-square rounded-circle me-2"
                            href="#"
                        >
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a
                            className="btn btn-primary btn-square rounded-circle me-2"
                            href="#"
                        >
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a className="btn btn-primary btn-square rounded-circle" href="#">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
            <a href="home.html" className="navbar-brand d-flex d-lg-none">
                <h1 className="m-0 display-4 text-secondary">
                    <span className="text-white">Farm</span>Fresh
                </h1>
            </a>
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
                    <a className= "nav-item nav-link">
                        <NavLink to="/Product" style={{color: "white"}}>Product</NavLink>
                    </a>
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
                </div>
            </div>
        </nav>
        <div className="container-fluid about pt-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                            <img className="img-fluid mt-auto mx-auto" src="http://localhost:63342/farmfresh-1.0.0/img/about.png"/>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-5">
                        <div className="mb-3 pb-2">
                            <h6 className="text-primary text-uppercase">About Us</h6>
                            <h1 className="display-5">
                                We Produce Organic Food For Your Family
                            </h1>
                        </div>
                        <p className="mb-4">
                            Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                            tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                            lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                            erat amet magna
                        </p>
                        <div className="row gx-5 gy-4">
                            <div className="col-sm-6">
                                <i className="fa fa-seedling display-1 text-secondary"/>
                                <h4>100% Organic</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-award display-1 text-secondary"/>
                                <h4>Award Winning</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        {/* Facts Start */}
        <div className="container-fluid bg-primary facts py-5 mb-5">
            <div className="container py-5">
                <div className="row gx-5 gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div
                                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                style={{width: 60, height: 60}}
                            >
                                <i className="fa fa-star fs-4 text-white"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Our Experience</h5>
                                <h1
                                    className="display-5 text-white mb-0"
                                    data-toggle="counter-up"
                                >
                                    12345
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div
                                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                style={{width: 60, height: 60}}
                            >
                                <i className="fa fa-users fs-4 text-white"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Farm Specialist</h5>
                                <h1
                                    className="display-5 text-white mb-0"
                                    data-toggle="counter-up"
                                >
                                    12345
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div
                                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                style={{width: 60, height: 60}}
                            >
                                <i className="fa fa-check fs-4 text-white"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Complete Project</h5>
                                <h1
                                    className="display-5 text-white mb-0"
                                    data-toggle="counter-up"
                                >
                                    12345
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div
                                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                style={{width: 60, height: 60}}
                            >
                                <i className="fa fa-mug-hot fs-4 text-white"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Happy Clients</h5>
                                <h1
                                    className="display-5 text-white mb-0"
                                    data-toggle="counter-up"
                                >
                                    12345
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Facts End */}
        {/* Services Start */}
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <h6 className="text-primary text-uppercase">Services</h6>
                            <h1 className="display-5">Organic Farm Services</h1>
                        </div>
                        <p className="mb-4">
                            Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                            tempor sit. Clita erat ipsum et lorem et sit sed stet labore
                        </p>
                        <a href="" className="btn btn-primary py-md-3 px-md-5">
                            Contact Us
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item bg-light text-center p-5">
                            <i className="fa fa-carrot display-1 text-primary mb-3"/>
                            <h4>Fresh Vegetables</h4>
                            <p className="mb-0">
                                Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                dolor magna dolor vero
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item bg-light text-center p-5">
                            <i className="fa fa-apple-alt display-1 text-primary mb-3"/>
                            <h4>Fresh Fruits</h4>
                            <p className="mb-0">
                                Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                dolor magna dolor vero
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item bg-light text-center p-5">
                            <i className="fa fa-dog display-1 text-primary mb-3"/>
                            <h4>Healty Cattle</h4>
                            <p className="mb-0">
                                Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                dolor magna dolor vero
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item bg-light text-center p-5">
                            <i className="fa fa-tractor display-1 text-primary mb-3"/>
                            <h4>Modern Truck</h4>
                            <p className="mb-0">
                                Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                dolor magna dolor vero
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item bg-light text-center p-5">
                            <i className="fa fa-seedling display-1 text-primary mb-3"/>
                            <h4>Farming Plans</h4>
                            <p className="mb-0">
                                Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                dolor magna dolor vero
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Products Start */}
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <image src="https://tse4.mm.bing.net/th?id=OIP.WNF9pDis5AWZ_qIgBNsWywHaHa&pid=Api&P=0&h=180" alt="Sần phảm nông sản" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Rau củ xanh</h5>
                            <p className="card-text">ỨDĐSJHDFHSỤDHKUHFS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="container-fluid py-5">*/}
        {/*    <div className="container">*/}
        {/*        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>*/}
        {/*            <h6 className="text-primary text-uppercase">Products</h6>*/}
        {/*            <h1 className="display-5">Our Fresh &amp; Organic Products</h1>*/}
        {/*        </div>*/}
        {/*        <div className="owl-carousel product-carousel px-5">*/}
        {/*            <div className="pb-5">*/}
        {/*                <div className="product-item position-relative bg-white d-flex flex-column text-center">*/}
        {/*                    <img className="img-fluid mb-4" src="img/product-1.png" alt="" />*/}
        {/*                    <h6 className="mb-3">Organic Vegetable</h6>*/}
        {/*                    <h5 className="text-primary mb-0">$19.00</h5>*/}
        {/*                    <div className="btn-action d-flex justify-content-center">*/}
        {/*                        <a className="btn bg-primary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-cart text-white" />*/}
        {/*                        </a>*/}
        {/*                        <a className="btn bg-secondary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-eye text-white" />*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="pb-5">*/}
        {/*                <div className="product-item position-relative bg-white d-flex flex-column text-center">*/}
        {/*                    <img className="img-fluid mb-4" src="img/product-2.png" alt="" />*/}
        {/*                    <h6 className="mb-3">Organic Vegetable</h6>*/}
        {/*                    <h5 className="text-primary mb-0">$19.00</h5>*/}
        {/*                    <div className="btn-action d-flex justify-content-center">*/}
        {/*                        <a className="btn bg-primary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-cart text-white" />*/}
        {/*                        </a>*/}
        {/*                        <a className="btn bg-secondary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-eye text-white" />*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="pb-5">*/}
        {/*                <div className="product-item position-relative bg-white d-flex flex-column text-center">*/}
        {/*                    <img className="img-fluid mb-4" src="img/product-1.png" alt="" />*/}
        {/*                    <h6 className="mb-3">Organic Vegetable</h6>*/}
        {/*                    <h5 className="text-primary mb-0">$19.00</h5>*/}
        {/*                    <div className="btn-action d-flex justify-content-center">*/}
        {/*                        <a className="btn bg-primary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-cart text-white" />*/}
        {/*                        </a>*/}
        {/*                        <a className="btn bg-secondary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-eye text-white" />*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="pb-5">*/}
        {/*                <div className="product-item position-relative bg-white d-flex flex-column text-center">*/}
        {/*                    <img className="img-fluid mb-4" src="img/product-2.png" alt="" />*/}
        {/*                    <h6 className="mb-3">Organic Vegetable</h6>*/}
        {/*                    <h5 className="text-primary mb-0">$19.00</h5>*/}
        {/*                    <div className="btn-action d-flex justify-content-center">*/}
        {/*                        <a className="btn bg-primary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-cart text-white" />*/}
        {/*                        </a>*/}
        {/*                        <a className="btn bg-secondary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-eye text-white" />*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="pb-5">*/}
        {/*                <div className="product-item position-relative bg-white d-flex flex-column text-center">*/}
        {/*                    <img className="img-fluid mb-4" src="img/product-1.png" alt="" />*/}
        {/*                    <h6 className="mb-3">Organic Vegetable</h6>*/}
        {/*                    <h5 className="text-primary mb-0">$19.00</h5>*/}
        {/*                    <div className="btn-action d-flex justify-content-center">*/}
        {/*                        <a className="btn bg-primary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-cart text-white" />*/}
        {/*                        </a>*/}
        {/*                        <a className="btn bg-secondary py-2 px-3" href="">*/}
        {/*                            <i className="bi bi-eye text-white" />*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        {/* Products End */}
        <div className="container-fluid bg-footer bg-primary text-white mt-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <h4 className="text-white mb-4">Get In Touch</h4>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-geo-alt text-white me-2"/>
                                    <p className="text-white mb-0">123 Street, New York, USA</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-envelope-open text-white me-2"/>
                                    <p className="text-white mb-0">info@example.com</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-telephone text-white me-2"/>
                                    <p className="text-white mb-0">+0703510324</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <a
                                        className="btn btn-secondary btn-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a
                                        className="btn btn-secondary btn-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a
                                        className="btn btn-secondary btn-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-linkedin-in"/>
                                    </a>
                                    <a
                                        className="btn btn-secondary btn-square rounded-circle"
                                        href="#"
                                    >
                                        <i className="fab fa-instagram"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Home
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        About Us
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Our Services
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Meet The Team
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Latest Blog
                                    </a>
                                    <a className="text-white" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-white mb-4">Popular Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Home
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Product
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Login
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Meet The Team
                                    </a>
                                    <a className="text-white mb-2" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Latest Blog
                                    </a>
                                    <a className="text-white" href="#">
                                        <i className="bi bi-arrow-right text-white me-2"/>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-n5">
                        <div
                            className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                            <h4 className="text-white">Newsletter</h4>
                            <h6 className="text-white">Subscribe Our Newsletter</h6>
                            <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                            <form action="">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control border-white p-3"
                                        placeholder="Your Email"
                                    />
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="x bg-dark text-white py-4">
            <div className="container text-center">
                <p className="mb-0">
                    ©{" "}
                    <a className="text-secondary fw-bold" href="#">
                        Your Site Name
                    </a>
                    . All Rights Reserved. Designed by{" "}
                    <a className="text-secondary fw-bold" href="https://htmlcodex.com">
                        HTML Codex
                    </a>
                </p>
                <br/>
                Distributed By:{" "}
                <a
                    className="text-secondary fw-bold"
                    href="https://themewagon.com"
                    target="_blank"
                >
                    ThemeWagon
                </a>
            </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top">
            <i className="bi bi-arrow-up"/>
        </a>

    </>
)
}
export default ProductList;