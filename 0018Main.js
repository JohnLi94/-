import React, { Component } from 'react';


class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是个人中心'
         };
    }    
    render() {
        return (
            <div className="info">
                我是个人中心组件
            </div>
        );
    }
}

export default Info;
