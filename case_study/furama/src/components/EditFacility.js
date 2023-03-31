import React, {Component} from 'react';

class EditFacility extends Component {
    render() {
        return (
            <div>
                <div className="modal" tabIndex="-1" id="editModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sửa thông tin dịch vụ <i className="fa-sharp fa-solid fa-user"></i></h5>
                                <button type="button" className="btn-close clearError" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input type="hidden" name="validate" value="edit" />
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Tên Dịch Vụ</label>
                                        <div className="col-sm-10">
                                            <input type="hidden" className="form-control" id="idEdit" />
                                            <input type="text" className="form-control" id="nameEdit" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Diện Tích</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" id="areaEdit" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Chi Phí Thuê</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" id="costEdit" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Số Người Tối Đa</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control" id="maxPeopleEdit" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Kiểu Thuê</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="rentTypeEdit">
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Loại Dịch Vụ</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="facilityTypeEdit" onChange="newUpdate()">
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3 row" id="standardEditCheck">
                                        <label className="col-sm-2 col-form-label">Tiêu Chuẩn Phòng</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="standardEdit" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" id="descriptionEditCheck">
                                        <label className="col-sm-2 col-form-label">Mô Tả Khác</label>
                                        <div className="col-sm-10">
                                        </div>
            </div>
        );
    }
}

export default EditFacility;