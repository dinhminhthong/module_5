import React, {Component} from 'react';

class AddFicility extends Component {
    render() {
        return (
            <>
                <div className="modal " tabIndex="-1" id="addmodal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Thêm mới dịch vụ{" "}
                                    <i className="fa-sharp fa-solid fa-user"></i>
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close clearError"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form method="post">
                                    <input type="hidden" name="validate" value="add" />
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Loại Dịch Vụ
                                        </label>
                                        <div className="col-sm-10">
                                            <select
                                                className="form-control"
                                                onChange={this.handleFacilityChange}
                                                value={this.state.facilityType}
                                                id="selectValue"
                                            >
                                                <option className="form-control" value="1">
                                                    Villa
                                                </option>
                                                <option className="form-control" value="2">
                                                    House
                                                </option>
                                                <option className="form-control" value="3">
                                                    Room
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Tên Dịch Vụ
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Diện Tích</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Chi Phí Thuê
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Số Người Tối Đa
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Kiểu Thuê</label>
                                        <div className="col-sm-10">
                                            <select className="form-control">
                                                <option className="form-control" value="1">
                                                    Year
                                                </option>
                                                <option className="form-control" value="2">
                                                    Month
                                                </option>
            </>
        );
    }
}

export default AddFicility;