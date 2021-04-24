import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Project Quản lý thành viên bằng React Js</h1>
                    <p className="lead">với data.json</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}
export default Header;