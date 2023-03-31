import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="col-12 col-md-6 col-sm-8 row">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-12 text-white p-3">
                            <p>Giá công bố</p>
                            <p>Tuyển dụng</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-12 text-white p-3">
                            <p>Liên hệ</p>
                            <p className="fs-9 fst-italic">
                                103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam Tel.: 84-236-3847
                                333/888 * Fax: 84-236-3847 666 Email: reservation@furamavietnam.com * www.furamavietnam.com GDS Codes:
                                Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD DADFU
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12 row text-white p-3">
                        <p>© 2018 Furama Resort Danang</p>
                    </div>
                </div>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                    crossOrigin="anonymous"
                ></script>
            </div>
        );
    }
}

export default Footer;
