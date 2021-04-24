import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }


    // Lấy dữ liệu khi nhập vào ô user,tel,permission
    getTextAddUser = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    // Hiển thị bảng AddUser.js khi được bấm vào
    showClickAddUser = () => {
        if (this.props.hienThiAddUser === true) {
            return (
                <form>
                    <div className="col-12">
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm Mới User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => this.getTextAddUser(event)} name="name" type="text" className="form-control" placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.getTextAddUser(event)} name="tel" type="text" className="form-control" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.getTextAddUser(event)} name="permission" className="custom-select" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={(name, tel, permission) => this.props.getTextAddUser(this.state.name, this.state.tel, this.state.permission)} className="btn btn-block btn-primary" value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.showClickAddUser()
                }
            </div>
        );
    }
}
export default AddUser;