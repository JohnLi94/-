import React from 'react';

import '../assets/css/index.css';

/*
    绑定属性要注意：
        class要变成className
        for要换成htmlfor
        style:<div style = {this.state.style}>我是一个红的 div  行内样式</div>

        其他的写法一样的。
*/

class Home extends React.Component{

    // 数据

    constructor(props){
        super(props);   //固定写法

        this.state = {

            msg:'我是一个Home组件',
            title:'我是一个title',
            color:'red',
            style:{

                color:'red',
                fontSize:'40px'
            }
        }
    }


    render(){

        return(

            <div>

                <h2>{this.state.msg}</h2>

                <div title = "1111">我是一个div</div>

                <br/>

                <div tile = {this.state.title}>我是一个div</div>

                <br/>

                <div class = 'red'>我是一个红色的div</div>
                {/* 用 class可能有警告，利用className可以避免 */}

                <div className = 'red'>我是一个红色的div</div>

                <br/>

                <div className = {this.state.color}>我是一个div</div>

                <br/>

                <label for = "name">姓名</label>    
                {/* 以免报错可以将name换成htmlfor */}

                <input id = "name"/>

                <br/>

                {/* <div style = "color:red">我是一个红色的div</div>     这样写直接报错*/}
                <div style = {{"color":'red'}}>我是一个红的div 行内样式</div>

                <br/>

                <div style = {this.state.style}>我是一个红的 div  行内样式</div>

             </div>

        )
    }

}


export default Home;