import React, { Component } from 'react';

class Customer extends Component {
    render() {
        return (
            <>
                <div style={{ marginBottom: "-80px" }}>
                    <br />
                    <br />
                    <div className="row">
                        <h1 style={{ textAlign: "center" }}>Danh Sách Khách Hàng</h1>
                    </div>
                    <br />
                    <br />
                    <div id="checkTable">
                        <table
                            className="table"
                            style={{
                                backdropFilter: "blur(10px)",
                                color: "black",
                                fontWeight: "bold",
                            }}
                        >
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Họ Tên</th>
                                <th>Ngày Sinh</th>
                                <th>Giới Tính</th>
                                <th>CMND</th>
                                <th>Số Điện Thoại</th>
                                <th>Email</th>
                                <th>Địa Chỉ</th>
                                <th>Loại Khách</th>
                                <th>Sửa</th>
                                <th>Xóa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                    >
                                        <i className="fa-sharp fa-solid fa-pen-to-square"></i>Sửa
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    >
                                        <i className="fa-sharp fa-solid fa-user-slash"></i>Xoá
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Customer;