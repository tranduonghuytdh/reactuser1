import React, { Component } from 'react';

class TableDataRow extends Component {

    // Phân quyền
    phanQuyen = () => {
        if (this.props.permission === 1) {
            return "Admin";
        } else if (this.props.permission === 2) {
            return "Modertor";
        } else {
            return "Normal";
        }
    }

    clickUpdate = (user) => {
        this.props.clickUpdate();
        this.props.chuyenTrangThaiAppUpdateUser();
    }

    clickDelete = (idUser) => {
        // console.log("Id : " + idUser);
        this.props.clickDelete(idUser);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>
                    {
                        this.phanQuyen()
                    }
                </td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.clickUpdate()}>
                            <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div className="btn btn-danger xoa" onClick={(idUser) => this.clickDelete(this.props.id)}>
                            <i className="fa fa-edit">Xóa</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}
export default TableDataRow;