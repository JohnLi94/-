import React, { Component } from 'react';


const axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个home组件'
         };
    }    
    render() {
        return (
            <div className="home">
                我是一个Home组件
            </div>
        );
    }
}

export default Home;
