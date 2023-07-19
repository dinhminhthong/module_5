function Login() {
return(
    <>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .gradient-custom-2 {\n        /* fallback for old browsers */\n        background: #fccb90;\n\n        /* Chrome 10-25, Safari 5.1-6 */\n        background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);\n\n        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n        background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);\n    }\n\n    @media (min-width: 768px) {\n        .gradient-form {\n            height: 100vh !important;\n        }\n    }\n    @media (min-width: 769px) {\n        .gradient-custom-2 {\n            border-top-right-radius: .3rem;\n            border-bottom-right-radius: .3rem;\n        }\n    }\n"
                }}
            />
            <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img
                                                    src="https://media.istockphoto.com/id/1148200448/vi/vec-to/logo-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-trang-tr%E1%BA%A1i-logo-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-l%C3%A1-vector-minh-h%E1%BB%8Da.jpg?s=1024x1024&w=is&k=20&c=3E6DZkamFYdJIAkhoGswdzQ7ik7TF0dEkiGp0ogXLWE="
                                                    style={{ width: 185 }}
                                                    alt="logo"
                                                />
                                                <h4 className="mt-1 mb-5 pb-1">We are go farm</h4>
                                            </div>
                                            <form>
                                                <p>Please login to your account</p>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form2Example11"
                                                        className="form-control"
                                                        placeholder="Username"
                                                    />
                                                    {/*                                        <label class="form-label" for="form2Example11">Username</label>*/}
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form2Example22"
                                                        className="form-control"
                                                        placeholder="Password"
                                                    />
                                                    {/*                                        <label class="form-label" for="form2Example22">Password</label>*/}
                                                </div>
                                                <div className="text-center pt-1 mb-1 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="button"
                                                        style={{ marginLeft: 5 }}
                                                    >
                                                        Log in
                                                    </button>
                                                </div>
                                                <div className="text-center pt-1 mb-1 pb-1">
                                                    <a
                                                        className="text-muted"
                                                        href="#!"
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">
                                                        Create new
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">
                                                Welcome to go farm, a clean, green, and environmentally
                                                friendly farm.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
)
}
export default Login;