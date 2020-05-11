import React , { Component } from 'react';

class Home extends Component{

    constructor(){      //构造函数
        super();

        this.state = {
            name:"老李",

            age:'30',

            userinfo:{

                username:"lzp"
            }
        }
    }

//jsx(js+html)
    render(){           //模板

        return (
        
        <div>
            <b2>react组件里面的所有节点要被根节点包含</b2>

            <p>姓名：{this.state.name}</p>
            <p>年纪：{this.state.age}</p>
            <p>对象：{this.state.userinfo.username}</p>
        </div>

        )
    }
}


export default Home;
