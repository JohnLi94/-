import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            msg:'我是一个底部组件'
         };
    }

    run =() => {

        alert('我是底部组件的run方法')
    }

    render() {
        return (

            <div>

                我是一个底部组件

            </div>
            
        );
    }
}

export default Footer;