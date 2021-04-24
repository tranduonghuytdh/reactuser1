import React, { Component } from 'react';

class UpdateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // State ban đầu bằng thông tin cần sửa từ TableDataRow.js
            id: this.props.updateuser.id,
            name: this.props.updateuser.name,
            tel: this.props.updateuser.tel,
            permission: this.props.updateuser.permission,
        }
    }

    // Khi lấy thông tin từ TableDataRow.js về Seach.js thì lưu thông tin lại cho UpdateUser.js
    getTextUpdateUser = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    // Vừa lưu giá trị text và vừa thay đổi trạng thái
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.chuyenTrangThaiAppUpdateUser();
        this.props.getTextUpdateUserNeed(info);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form method="post">
                        <div className="card text-white bg-warning mb-3 mt-2">
                            <div className="card-header text-center">Update User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.getTextUpdateUser(event)} defaultValue={this.props.updateuser.name} name="name" className="form-control" placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.getTextUpdateUser(event)} defaultValue={this.props.updateuser.tel} name="tel" className="form-control" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select name="permission" onChange={(event) => this.getTextUpdateUser(event)} defaultValue={this.props.updateuser.permission} className="custom-select" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" onClick={() => this.saveButton()} className="btn btn-block btn-danger" value="Save" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default UpdateUser;