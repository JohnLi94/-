import React, { Component } from 'react';

class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个UserEdit组件'
         };
    }
    render() {
        return (
            <div className="user">               
                用户组件UserEdit
            </div>
        );
    }
}

export default UserEdit;
