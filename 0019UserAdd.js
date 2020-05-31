import React, { Component } from 'react';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个User组件'
         };
    }
    render() {
        return (
            <div className="user">               
                用户组件UserAdd
            </div>
        );
    }
}

export default UserAdd;
