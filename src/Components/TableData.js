import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    clickDelete = (idUser) => {
        this.props.clickDelete(idUser);
    }

    // truyền từ App.js và  mapping dữ liệu vào TableDataRow.js
    truyenData = () => (
        this.props.truyenDuLieuData.map((value, key) => {
            return (
                <TableDataRow
                    key={key}
                    id={value.id}
                    stt={key}
                    name={value.name}
                    tel={value.tel}
                    permission={value.permission}
                    // Truyền tiếp quá TableDataRow.js
                    clickUpdate={(user) => this.props.clickUpdate(value)}
                    chuyenTrangThaiAppUpdateUser={() => this.props.chuyenTrangThaiAppUpdateUser()}
                    clickDelete={(idUser) => this.clickDelete(idUser)}
                />
            )
        })
    )

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.truyenData()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TableData;