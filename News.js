import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个News组件'
         };
    }    
    render() {
        return (
            <div className="news">
                News组件

            </div>
        );
    }
}

export default News;
