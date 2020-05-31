import React, { Component } from 'react';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个商户组件'
         };
    }    
    render() {
        return (
            <div className="shop">
                shop组件

            </div>
        );
    }
}

export default Shop;
