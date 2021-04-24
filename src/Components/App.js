import React, { Component } from 'react';
import './../css/App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import Data from './Data.json';
// const { v4: uuidv4 } = require('uuid');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Trạng thái của AddUser.js
      hienThiAddUser: false,
      // Trạng thái dữ liệu trong Data.json
      data: [],
      // Lưu giá trị khi App.js nhận text từ Search.js
      search: '',
      // Trạng thái của UpdateUser.js
      hienThiUpDateUser: false,
      // Lưu giá trị từ TableDataRow.js
      updateuser: {}
    }
  }

  // Chuyển đổi trạng thái hiển thị AddUser.js
  chuyenTrangThaiHienThiAddUser = () => {
    this.setState({
      hienThiAddUser: !this.state.hienThiAddUser
    });
  }

  // Chuyển đổi trạng thái hiển thị UpdateUser.js
  chuyenTrangThaiAppUpdateUser = () => {
    this.setState({
      hienThiUpDateUser: !this.state.hienThiUpDateUser
    });
  }

  // Xử lý tìm kiếm và lấy dữ liệu text từ Search.js
  getTextSearch = (dl) => {
    this.setState({
      search: dl
    });
  }

  // Xử lý thêm mới và lấy dữ liệu từ AddUser.js
  getTextAddUser = (name, tel, permission) => {
    var item = {};
    // item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    // Thêm vào Data.json
    var items = this.state.data;
    items.push(item);
    // Sau khi thêm thì phải lưu lại vào state
    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(items));  
  }

  // Truyền dữ liệu từ TableDataRow.js vào UpdateUser.js
  clickUpdate = (user) => {
    this.setState({
      updateuser: user
    });
  }

  // Sửa Láy thông tin của Search.js lấy dữ liệu từ UpdateRow.js
  getTextUpdateUserNeed = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  clickDelete = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    // Đẩy dữ liệu khi xóa thì cập nhập vào Local Storage
    localStorage.setItem('userData',JSON.stringify(tempData));
  }





  componentWillMount() {
    // Kiểm tra có Local storage chưa
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(Data));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }


  render() {

    // stringify chuyển các Object thành 1 chuỗi
    // localStorage.setItem('userData',JSON.stringify(Data));

    // Xử lý tìm kiếm (Khai báo mảng trung gian)
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.search) !== -1) {
        // Đẩy kết quả muốn tìm vào so sánh
        ketqua.push(item);
      } else if (item.tel.indexOf(this.state.search) !== -1) {
        ketqua.push(item);
      }
    })

    return (
      <div className="Bootom">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                chuyenTrangThaiAppSearch={() => this.chuyenTrangThaiHienThiAddUser()}
                hienThiAddUser={this.state.hienThiAddUser}
                getTextSearch={(dl) => this.getTextSearch(dl)}
                hienThiUpDateUser={this.state.hienThiUpDateUser}
                chuyenTrangThaiAppUpdateUser={() => this.chuyenTrangThaiAppUpdateUser()}
                updateuser={this.state.updateuser}
                getTextUpdateUserNeed={(info) => this.getTextUpdateUserNeed(info)}
              />

              <TableData
                truyenDuLieuData={ketqua}
                clickUpdate={(user) => this.clickUpdate(user)}
                chuyenTrangThaiAppUpdateUser={() => this.chuyenTrangThaiAppUpdateUser()}
                clickDelete={(idUser) => this.clickDelete(idUser)}
              />

              <AddUser
                hienThiAddUser={this.state.hienThiAddUser}
                getTextAddUser={(name, tel, permission) => this.getTextAddUser(name, tel, permission)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
