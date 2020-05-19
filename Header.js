import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { 

            msg:'这是一个头部组件'
         };
    }

    getNews =() =>{

        // 获取父组件里面的设置
        alert(this.props.news.state.msg);
    }

    render() {
        return (
            

            <div>

        {/* 父子组件传值props */}
        <h2>{this.props.title}</h2>

        <button onClick = {this.props.run}>调用news父组件的run方法</button>

         <br /><br />   

        <button onClick = {this.props.news.getData}>获取整个news组件getData方法</button>

        <br /><br />   

        <button onClick = {this.getNews}>获取整个news组件实习</button>


        <br /><br />   

        <button onClick = {this.props.news.getChildData}>子组件给父组件传值</button>
            </div>

        );
    }
}

export default Header;