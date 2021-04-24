import React, { Component } from 'react';
import UpdateUser from './UpdateUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            // Lưu giá trị thông tin cần sửa từ UpdateUser.js
            userObj: {}
        }
    }

    // Lấy dữ liệu khi nhập vào ô tìm kiếm
    getTextSearch = (event) => {
        this.setState({
            // Lấy ra giá trị text khi nhập vào
            search: event.target.value
        });
        this.props.getTextSearch(this.state.search);
    }

    // Hiển thị nút ở search
    showButtuon = () => {
        if (this.props.hienThiAddUser === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.chuyenTrangThaiAppSearch()} >Close</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.chuyenTrangThaiAppSearch()} >Open</div>
        }
    }

    // Gửi dữ liệu từ UpdateUser.js lên Search.js
    getTextUpdateUserNeed = (info) => {
        this.setState({
            userObj: info
        });
    }

    // Hiển thị bảng UpdateUser.js
    showUpdateUser = () => {
        if (this.props.hienThiUpDateUser === true) {
            return <UpdateUser
                chuyenTrangThaiAppUpdateUser={() => this.props.chuyenTrangThaiAppUpdateUser()}
                updateuser={this.props.updateuser}
                getTextUpdateUserNeed={(info) => this.props.getTextUpdateUserNeed(info)}
            />
        }
    }

    render() {
        return (
            <div className="col-12">

                {
                    this.showUpdateUser()
                }

                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" onChange={(event) => this.getTextSearch(event)} name="search" className="form-control" placeholder="Nhập từ khóa tìm kiếm" />
                        <div className="btn btn-info" onClick={(dl) => this.props.getTextSearch(this.state.search)} >Tìm</div>
                    </div>
                </div>
                <div className="form-group">
                    {
                        this.showButtuon()
                    }
                </div>
                <hr />
            </div>
        );
    }
}
export default Search;