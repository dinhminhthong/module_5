import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="row headerlink">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid bg-success" style={{ height: '80px' }}>
                            <div className="col-md-4 col-sm-3"></div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-0 mb-lg-2">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="home.component.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="">Employee</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="/customer/list">Customer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="/contract">Contract</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="/facility">Facility</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;
