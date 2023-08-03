import React, {useEffect, useState} from "react";
import * as productService from "../../service/ProductService";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const param = useParams()

    useEffect(() => {
        const detailP = async () => {
            const rs = await productService.detail(param.id)
            console.log(rs)
            setProduct(rs)
        }
        detailP()
    },[param.id])



    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid px-5 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-2"/>
                            <h2 className="mb-0">+012 345 6789</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="index.html" className="navbar-brand ms-lg-5">
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
                <a href="index.html" className="navbar-brand d-flex d-lg-none">
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
                        <a href="index.html" className="nav-item nav-link">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About
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
                                className="nav-link dropdown-toggle active"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </a>
                            <div className="dropdown-menu m-0">
                                <a href="blog.html" className="dropdown-item">
                                    Blog Grid
                                </a>
                                <a href="detail.html" className="dropdown-item active">
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
            {/* Navbar End */}
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Blog Detail</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
                                Home
                            </a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5">
                                Blog Detail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/* Blog Start */}
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        {/* Blog Detail Start */}
                        <div className="mb-5">
                            <div className="row g-5 mb-5">
                                <div className="col-md-6">

                                    <img className="img-fluid w-100" src={product.image} alt=""/>
                                </div>
                            </div>
                            <h1 className="mb-4">
                                {product.productName}
                            </h1>
                            <h6>
                              Số lượng:  {product.inventoryLevel}
                            </h6>
                            <h5>
                                {product.description}
                            </h5>

                                {/*</div>*/}
                                {/*</div>*/}
                        </div>
                        {/* Blog Detail End */}
                        {/* Comment List Start */}
                        <div className="mb-5">
                            <h2 className="mb-4">3 Comments</h2>
                            <div className="d-flex mb-4">
                                <img
                                    src="data:image/webp;base64,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"
                                    className="img-fluid"
                                    style={{width: 45, height: 45}}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                                        voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                                        rebum magna dolores sed eirmod
                                    </p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="data:image/webp;base64,UklGRuIKAABXRUJQVlA4INYKAAAwNACdASqWAJYAPt1kqU6opaijK5K8ARAbiWJssDANAgjxWZ4rwaVhAZuJ9CAgXP6H2G6uvBuzo7UZrIO5l6y8OhXs2oz5U+XMygF7dBFfaVAo+A2SYb08f5GHHvR5AmnwcS9vpRPwObnVrtOzyLcyCFCad4H7lB0m7YYVSQByX8kzA6Kj0ZuDZ8Z53gajfOkFfXblnjj6hFpVy3M7Kx5xEeiGPupMzgBFh8WABmjkbjwYyPZ+aq7nvOFYOIlDdTMdw27Oc6wuLqjTjuOO3Dvu72P8JdKGVUeI38JCMik8nq2/roqgdz2vmJdmSzVsx5whgKA5M418KBHwxeUyPoIJ4TgmM0Y0XfskRF1f3xAcC6wkdmcHxLtQiFbkEg0RcLHsVqQAblu+3mykcgzRncM6ADj31hPqpRKx4a6oSUMmCDt/+5hecWblzotNzfSZpvw3suksSgaKaoO6D9d9LWMrdwF/7LlG6gu3H4IPEf3C4UG4CTMsYgmr67OjsZhOYJalmdCOtq7O96gUrhcr3ZmFdXztUz+Qele+RjIYoC/3wgbt1zRwYmQHNRAA/uyefvkWlw4VxNFRnavHKkqK7mv4b/wIR2Wi/9atkeS3Y8kNqBpK88PPtf4fQJIRSVBC4jFJDRFQg67546Pw6slmLFLSj2dmbMsTkBIswAU8v9jx3qKzT+wqck/DPEKVh0AntopoijMLk8ROVNini3Y1xXNwic/tylVRVTQYFR2xrG18CKDb7lD7+8SqTz881fBsnkf/kUmljpmo9clWo2jwBB9BIceqF35Tc1hEiLYXagKbpYkcFbiPcXeFg+7vjH4PuoSNYk9lwFAtpCcvlubNKMs39WvGvem6oT5yd7ElXOBIDYYIqYuj1El21qxls94OzlaVjGI6vXEYg3EoK+RbhH5lnB+UjulgldIbypNMIfSUzdoFAcDJfonl1pzjxaYcE0NH1jH53CL+JE0TrbUpBHgrFSmNtvyZTL3zzcr6yWHoDQalrKmgUX6MT5LzGK8S8QoRPjXZPAFreGRWcjoCPupmi7NNLdCewHmMkDIigwrj2iuf89DW+21qMHPYuWAJqAUsIhR2m432r4kH4t3iKGgCEY39AFdUwl0XNCiUf4mEWYWemlNLrhh5XduzbUgXIBW7ggl/u0GOMATO0r5vnCe+f6rme9f0/wwS/Ou5A5B/qOceVMGqMRLZRHl9PSd8/B3whM56b0Fd9l0LqqdT6A1qeWYcLJJA00BWZ44PD9uwFD1dSIrfbefeUeAShsipLDdnczHvNJe5sRzZTAT48mIM10CvDC2vNKJksQ1S8GLSwzXUp0g983Gmaj6cT3NTTb9ZYptEY1cE5qCk2Xk+BuJNt7YIFBw8DiOtLInFm3zrXGZO4uOpbgd07B6DoD+sqKe82K9rnqE70jOnpZFHveDblQwZOi9Sj9LmOUowy8haRLT297dkVJN13JLljYBj6/Ch9cW1KAOVf+TlEALVZ8BYJdYv3Buwjx6SeG6cRc4QlxazYXhZsfA81UyD/lGlG4kgcnRG7FxRAqtLb4TywLWfB3tDciaHqhOYVoPNMxnTMG+y7jD8dVNlM6YrQwQoAbfQ5w0MBKVriRiIIRGbbuYEwweDuda1VX4qfLI+dMe2R/R80soN1tRcsVxeTq6iTOpqY3vyoyU6TICE4T8QVixjPjuxMRhvijYk0Z3Li9hoQioUPnzkjWKxaWyoNG0n2I9hi7cxusUNhFpq2pQDZ8PfIDj2FMd97uz/ywuSMgCKJUdm1xFgUiCPBl2rzq11KKheRqeU7lTgX5CDYGC6BaqZ7lO0ZUBlOxCBdvYywTY7so3fctQAKdwFvORttYc7DG9AXsDdR3efcTwIlYQjHr9SAHyWITpOZM7UVV0eeK7vKtE4mumS6Q3YNBz6kS71H3iyI8S/Ouu+F9Hr0GdxFBS8Q2d9ni5zX5ZQ1TFZd3EBXAh3KQ6mpwef4usYKNyt6auLnkfiCWg3x2J7XX/Kf4k8fOtNqaRD2sjLK6vv/1U25zvLnfwfVGeAsE20DMxv1fIRKSZoBbhO+i3njWp4d0LBssxhEuabC5mDB/x9M8C6JIkHiflk1dmV6c3fZoH0lOOKczUOCf8cTjjF6kuSPSHk31LsSO9oU5TSWvVsXEymUW72d2P0sXOQLC004cztxQna05Fw4Pg/vrIvcq+F7ykO6To3hqT+2gBj50v5NXEe0Xb8KAb7XwU9GIVVbgcZljk70vcLNQ24jSCoOUBb4IZPEP7IFW/v9hfSByvolgNX1c/XSynP0sCqZVUEt4hbXPaCu7MNJ+6RlSv3akdcJOr2CdQjJ3uubplEX2pnBOo70uVthr/LX+zz19XEV2yMuP0mpp7ru8m4EED4eVJ82qv8NBdk+cyvtkKYAIQLfvHj9eJRGdy4hbJaAigdQXzZXgPWnV5HlsF2x0yYstzBJTEyx8INr2ASzA7UgjNTWg81uERjEfr9oRi9sydUGFV0dyaCQj0Q0j4HQNYW5UghgBUdN9eh6tZinU38jJJTlkx4dHE5G5JMH3D5PDTxy6jbwfF7bZxq53Yiot9EYP+Kg9R/k9QiB1SCsKj6M0+WBa564XqembAJ6Je69wFcZZ4ZsFHsm551bhCyqHhOFK5+BDmNoKNtuhrlNze1OfJ3ZMkLUUDjdmlpijHu/qaX78+hdNwu42+1fT4VCJhBRwhoUKtgVFN+3wQ84Xkl4rsS85oRBxqf3ayC1XbRUc3sOCmztwF1U/o55fP7hMFsloYYnk5bbXk8J5jcVK4/v65+EnyUqsr1IlpuKj1OW9wI2g+SAwMoftbA5w/QckvGL+e4Y9ELBdCPgBnKW3CzfJxUVvLM/vBU4caI+9Y267QYui4zQLhKYc4Qadj/vNakUAsyX4Q5gVtCgXNQWdXZrVfOnwnQ/LqlBjXOsNpZpPI+uA8XZMiHxlwRhB4NTB6bjLBBxGtCzQv8Da6sMzeISuiB3wwuoCMtdaGwU6mY83XSvt43xJ6U3Jx/V3+gD8USE+Cfng/Trrty11U0SMKYlDoQQeE2Ww4PpKT3e7LkP0JE5Lfno2n6pyUj4QBDghPP+OYDXmqDVd+c2RRRtZ1xL3xVnsJ0gt+v4KmzQH6HoP8frrMw2qK2I8hmQF/qOfuvEIJGhffixaSNCpOVd+Q9Fs5td1XLy3xEDYzYY/YYy8xXZDIW0Am8w6rgRXo7CzsUC0ssSjQp2Xo4nDtuIedljvFyaDzx0hdLD3IZag7rAH7wcAdptCdyBP4StpDUH6l7h4+u17FfSjK1ihDdz+xehx2q+/arXpzDtj+Ywg7DTCEnJH6oI6sZ+8m2kDu9BXbYY2+XB/A4jfURLwtrW2zfoiHOs5H/3gi6e48JBQ+LRRB/rVRtqkOwj8PM/o7d//4DGP7gtuA82/3+O/gKWOFRlroYftWcNhhaqOpvOUEkyq1x4fYhKtVgOveoi1CEqAF4lKYHtr4VvoLKrcdjSjZFVPRJd1r+J8ud3kQx8X67d7AlifJv56sjaG/hhf+tG+chQ5qPZBKflPG220Jc1gPj06Xf5PkXDR4gwvgLqk628a/0A3endDuWrIavCIILtldlNqI7wDJAnkavtYjdjdjBnfuWFnTmxJw7NjxXlCtllfdUcq4VLjI0rkhCKSO2GVtAG4U+d7nAPFmIMIek5yGX+uhNRcVwFVUSsgywAA=="
                                    className="img-fluid"
                                    style={{width: 45, height: 45}}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                                        voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                                        rebum magna dolores sed eirmod
                                    </p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                            <div className="d-flex ms-5 mb-4">
                                <img
                                    src="data:image/webp;base64,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"
                                    className="img-fluid"
                                    style={{width: 45, height: 45}}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                                        voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                                        rebum magna dolores sed eirmod
                                    </p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                        </div>
                        {/* Comment List End */}
                        {/* Comment Form Start */}
                        <div className="bg-primary p-5">
                            <h2 className="text-white mb-4">Leave a comment</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Your Name"
                                            style={{height: 55}}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control bg-white border-0"
                                            placeholder="Your Email"
                                            style={{height: 55}}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Website"
                                            style={{height: 55}}
                                        />
                                    </div>
                                    <div className="col-12">
                <textarea
                    className="form-control bg-white border-0"
                    rows={5}
                    placeholder="Comment"
                    defaultValue={""}
                />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">
                                            Leave Your Comment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Comment Form End */}
                    </div>
                    {/* Sidebar Start */}
                    <div className="col-lg-4">
                        {/* Search Form Start */}
                        <div className="mb-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    placeholder="Keyword"
                                />
                                <button className="btn btn-primary px-4">
                                    <i className="bi bi-search"/>
                                </button>
                            </div>
                        </div>
                        {/* Search Form End */}
                        {/* Category Start */}
                        <div className="mb-5">
                            <h2 className="mb-4">Categories</h2>
                            <div className="d-flex flex-column justify-content-start bg-primary p-4">
                                <a className="fs-5 fw-bold text-white mb-2" href="#">
                                    <i className="bi bi-arrow-right me-2"/>
                                    Web Design
                                </a>
                                <a className="fs-5 fw-bold text-white mb-2" href="#">
                                    <i className="bi bi-arrow-right me-2"/>
                                    Web Development
                                </a>
                                <a className="fs-5 fw-bold text-white mb-2" href="#">
                                    <i className="bi bi-arrow-right me-2"/>
                                    Web Development
                                </a>
                                <a className="fs-5 fw-bold text-white mb-2" href="#">
                                    <i className="bi bi-arrow-right me-2"/>
                                    Keyword Research
                                </a>
                                <a className="fs-5 fw-bold text-white" href="#">
                                    <i className="bi bi-arrow-right me-2"/>
                                    Email Marketing
                                </a>
                            </div>
                        </div>
                        {/* Category End */}
                        {/* Recent Post Start */}
                        <div className="mb-5">
                            <h2 className="mb-4">Recent Post</h2>
                            <div className="bg-primary p-4">
                                <div className="d-flex overflow-hidden mb-3">
                                    <img
                                        className="img-fluid flex-shrink-0"
                                        src="data:image/webp;base64,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"
                                        style={{width: 75}}
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0"
                                    >
                                        Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden mb-3">
                                    <img
                                        className="img-fluid flex-shrink-0"
                                        src="img/blog-2.jpg"
                                        style={{width: 75}}
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0"
                                    >
                                        Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden mb-3">
                                    <img
                                        className="img-fluid flex-shrink-0"
                                        src="img/blog-3.jpg"
                                        style={{width: 75}}
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0"
                                    >
                                        Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden mb-3">
                                    <img
                                        className="img-fluid flex-shrink-0"
                                        src="img/blog-1.jpg"
                                        style={{width: 75}}
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0"
                                    >
                                        Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden">
                                    <img
                                        className="img-fluid flex-shrink-0"
                                        src="img/blog-2.jpg"
                                        style={{width: 75}}
                                        alt=""
                                    />
                                    <a
                                        href=""
                                        className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0"
                                    >
                                        Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Recent Post End */}
                        {/* Image Start */}
                        <div className="mb-5">
                            <img src="img/blog-1.jpg" alt="" className="img-fluid rounded"/>
                        </div>
                        {/* Image End */}
                        {/* Tags Start */}
                        <div className="mb-5">
                            <h2 className="mb-4">Tag Cloud</h2>
                            <div className="d-flex flex-wrap m-n1">
                                <a href="" className="btn btn-primary m-1">
                                    Design
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Development
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Marketing
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    SEO
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Writing
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Consulting
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Design
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Development
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Marketing
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    SEO
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Writing
                                </a>
                                <a href="" className="btn btn-primary m-1">
                                    Consulting
                                </a>
                            </div>
                        </div>
                        {/* Tags End */}
                        {/* Plain Text Start */}
                        <div>
                            <h2 className="mb-4">Plain Text</h2>
                            <div
                                className="bg-primary text-center text-white"
                                style={{padding: 30}}
                            >
                                <p>
                                    Vero sea et accusam justo dolor accusam lorem consetetur, dolores
                                    sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor
                                    magna takimata, amet sit et diam dolor ipsum amet diam
                                </p>
                                <a href="" className="btn btn-secondary py-2 px-4">
                                    Read More
                                </a>
                            </div>
                        </div>
                        {/* Plain Text End */}
                    </div>
                    {/* Sidebar End */}
                </div>
            </div>
            {/* Blog End */}
            {/* Footer Start */}
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
                                        <p className="text-white mb-0">+012 345 67890</p>
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
            <div className="container-fluid bg-dark text-white py-4">
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


        </>
    );
};

export default ProductDetail;
