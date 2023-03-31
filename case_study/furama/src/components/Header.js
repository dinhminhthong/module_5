import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div style={{ background: 'cornflowerblue' }}>
                        <p>Weather</p>
                    </div>

                    <div className="row header h-20 bg-white">
                        <div className="col-12 col-md-2 col-sm-6">
                            <img
                                src="https://ui.cltpstatic.com/places/hotels/2015/201581/images/708cdb98_w.jpg"
                                height="100"
                                alt="Hotel Furama Resort Danang"
                            />
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="catalog-widget-inside" style={{ visibility: 'visible' }}>
                                <a style={{ textDecoration: 'none' }} href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html" target="_blank">
                                    <div className="widget-tripadvisor">
                                        <div className="inside">
                                            <div className="widget-tripadvisor-logo">
                                                <img src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png" alt="TripAdvisor logo" width="90" height="20" />
                                            </div>
                                            <div className="widget-tripadvisor-rating">
                                                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png" alt="TripAdvisor rating" width="90" height="20" />
                                            </div>
                                            <div className="widget-tripadvisor-text">2,746 Reviews</div>
                                        </div>
                                    </div>
                                </a>
                                <span className="catalog-widget-toggle js-catalog-widget-toggle"></span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 fst-italic">
                            <p>
                                Address: 103 – 105 Võ Nguyên Giáp Street, Khuê Mỹ wards, Ngũ hành Sơn District, Đà Nẵng city, Việt Nam 7.0 km from International Airport Đà Nẵng
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-5">
                            <p>Phone: 84-236-3847 333/888 reservation@furamavietnam.com</p>
                        </div>
                        <div className="col-md-1 col-sm-1">
                            <p>Minh Thông</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;