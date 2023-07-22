function Home() {
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
                            </div>
                    </div>
            </nav>
            <div className="container-fluid about pt-5">
                    <div className="container">
                            <div className="row gx-5">
                                    <div className="col-lg-6 mb-5 mb-lg-0">
                                            <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                                                    <img className="img-fluid mt-auto mx-auto" src="http://localhost:63343/farmfresh-1.0.0/img/about.png"/>
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
        </>
)
}
export default Home;