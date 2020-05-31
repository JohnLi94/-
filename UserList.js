import React, { Component } from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个UserList组件'
         };
    }
    render() {
        return (
            <div className="user">               
                用户组件UserList
            </div>
        );
    }
}

export default UserList;
