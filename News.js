import React , { Component } from 'react';

class News extends React.Component{

    constructor(props){    //构造函数

        super(props); //用于父子之间传值，固定写法

        //定义数据

        this.state = {

            userinfo:"阿李"
        }
    }

    render(){

        return(
            <div>
                 <h2>{this.state.userinfo}</h2>
                <ul>
                    <li>这是一个列表</li>   
                    <li>这是一个列表</li>  
                    <li>这是一个列表</li>   
                </ul>
            </div>
        )
    }
}


export default News;