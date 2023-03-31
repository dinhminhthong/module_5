import React, { Component } from 'react';

class Faciliti extends Component {
    render() {
        return (
            <div>
                <div className="col-4" style={{ marginTop: '40px' }}>
                    <h5 style={{ color: 'darkkhaki' }}>Contact US</h5>
                    <br />
                    <p style={{ fontSize: '17px' }}>
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                        103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
                        Danang City, Vietnam
                        <br />
                        Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                        <br />
                        Email: reservation@furamavietnam.com *{' '}
                        <a
                            href="https://furamavietnam.com/undefined/"
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            www.furamavietnam.com
                        </a>{' '}
                        <br />
                        GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD
                        032771, Worldspan- GD DADFU
                    </p>
                    <hr />
                    <a href="https://www.facebook.com/furamaresort/">
                        <img src="https://furamavietnam.com/wp-content/uploads/2019/06/incon-Facbook-1.png" />
                    </a>
                    <a href="https://www.instagram.com/furama_resort_and_villas/?hl=vi">
                        <img src="https://furamavietnam.com/wp-content/uploads/2019/06/social-ins.png" />
                    </a>
                    <a href="https://www.youtube.com/user/furamaresortvietnam/featured">
                        <img src="https://furamavietnam.com/wp-content/uploads/2021/10/social-youtube.png" />
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p style={{ marginLeft: '300px' }}>
                        © 2018 Furama Resort Danang{' '}
                    </p>
                </div>
            </div>
        );
    }
}

export default Faciliti;