import React, { Component } from 'react';



class ShopAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个商户组件'
         };
    }    
    render() {
        return (
            <div className="shop">
                增加商户
            </div>
        );
    }
}

export default ShopAdd;
