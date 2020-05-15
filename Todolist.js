import React, { Component } from 'react';

import '../assets/css/index.css';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            list:[]
         };
    }

    addData=() =>{

        alert(this.refs.title.value)

        var tempList = this.state.list;     //获取list值

        tempList.push(this.refs.title.value);   //返回值是一个索引值

        this.refs.title.value = '';       //让input中输入数据后显示框内信息清空
        
        this.setState({

            list:tempList       //改变数据

        })
    }

    removeData =(key) =>{

        // alert(key);
        var tempList = this.state.list;
        tempList.splice(key , 1);       //删除数组中的数据

        this.setState({
            list:tempList
        })
    }

    render() {
        return (

            <div>
                <h2>React Todolist案例演示</h2>

                <input ref = "title"/>  <button onClick = {this.addData}>增加+</button>

                <hr />

                <ul className = "list">

                    {
                        // 用到 this要注意this指向
                        this.state.list.map((value , key) => {

                        return(

                            <li key = {key}> {value}   ---------<button onClick = {this.removeData.bind(this , key)}>删除-</button></li>
                        )

                        })
                    }

                </ul>
            </div>
            
        );
    }
}

export default Todolist;