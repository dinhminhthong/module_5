import React, {Component} from 'react';

class Contract extends Component {
    render() {
        return (
            <div>
                <>
                    <div>
                        <br />
                        <h1 style={{ textAlign: "center" }}> Danh Sách Hợp Đồng</h1>
                        <br /> <br /> <br />
                        <table
                            className="table"
                            style={{
                                backdropFilter: "blur(10px)",
                                color: "black",
                                fontWeight: "bold"
                            }}
                        >
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Dịch Vụ</th>
                                <th>Nhân Viên</th>
                                <th>Khách Hàng</th>
                                <th>Ngày Bắt Đầu</th>
                                <th>Ngày Kết Thúc</th>
                                <th>Tiền Đặt Cọc</th>
                                <th>Tổng Tiền</th>
                                <th>Các Dịch Vụ Đi Kèm</th>
                            </tr>
                            </thead>
                        </table>
                        <center>
                            <a className="btn btn-light" id="pre">
                                Previous
                            </a>
                            <button id="pagez" className="btn btn-outline-light">
                                1
                            </button>
                            <a className="btn btn-light" id="nex">
                                Next
                            </a>
                        </center>
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div style={{ background: "cadetblue" }} className="row">
                            <div className="col-1" style={{ background: "cadetblue" }} />
                            <div className="col-3" style={{ background: "#bcbebf" }}>
                                <h1 style={{ color: "darkkhaki", textAlign: "center", marginTop: 30 }}>
                                    Hướng Dẫn Di Chuyển
                                </h1>
                                <p style={{ textAlign: "left" }}>
                                    Khu nghỉ dưỡng Furama là cơ sở hàng đầu để <br />
                                    khám phá một trong những điểm đến hấp dẫn <br />
                                    nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe
                                    <br />
                                    ngắn là bốn Di sản Văn hóa Thế giới được UNESCO công nhận:
                                </p>
                                <h1>
                                    <a
                                        href="#"
                                        className="btn"
                                        style={{ color: "white", background: "teal" }}
                                    >
                                        <i className="fa-sharp fa-solid fa-location-dot">
                                            {" "}
                                            Xem Trên Bản Đồ
                                        </i>
                                    </a>
                                </h1>
                                <h2 style={{ color: "darkkhaki" }}>Địa Điểm</h2>
                                <br />
                                <p>
                                    <b>1. Cố đô huế      &nbsp;2 tiếng</b>
                                </p>
                                <hr />
                                <p>
                                    <b>2. Phố cổ Hội An      30 phút</b>
                                </p>
                                <hr />
                                <p>
                                    <b>3. Thánh địa Mỹ Sơn      90 phút</b>
                                </p>
                                <hr />
                                <p>
                                    <b>4. Động Phong Nha      3 tiếng</b>
                                </p>
                            </div>
                            <div className="col-3" style={{ marginTop: 30, textAlign: "center" }}>
                                <a style={{ color: "#5c636a", textDecoration: "none" }} href="">
                                    News
                                </a>
                                <br />
                                <br />
                                <a style={{ color: "#5c636a", textDecoration: "none" }} href="">
                                    Rack rate
                                </a>
                                <br />
                                <br />
                                <a style={{ color: "#5c636a", textDecoration: "none" }} href="">
                                    Lifestyle Bog
                                </a>
                                <br />
                                <br />
                                <a style={{ color: "#5c636a", textDecoration: "none" }} href="">
                                    Work with us
                                </a>
                                <br />
                                <br />
                                <a style={{ color: "#5c636a", textDecoration: "none" }} href="">
                                    Contact us
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div style={{ marginLeft: 130 }}>
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2019/02/Ariyana-Tourism-Complex-02-2.png"
                                        width={760}
                                        height={90}
                                    />
                                </div>
                            </div>
                            <div className="col-4" style={{ marginTop: 40 }}>
                                <h5 style={{ color: "darkkhaki" }}>Contact US</h5>
                                <br />
                                <p style={{ fontSize: 17 }}>
                                    <i className="fa-sharp fa-solid fa-location-dot" />
                                    103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                                    <br /> District, Danang City, Vietnam
                                    <br />
                                    Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                                    <br />
                                    Email: reservation@furamavietnam.com *
                                    <a
                                        href="https://furamavietnam.com/undefined/"
                                        style={{ color: "black", textDecoration: "none" }}
                                    >
                                        www.furamavietnam.com
                                    </a>{" "}
                                    <br /> GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236
                                    <br />, Sabre-GD 032771, Worldspan- GD DADFU
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
                                <p style={{ marginLeft: 300 }}>© 2018 Furama Resort Danang </p>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        );
    }
}

export default Contract;