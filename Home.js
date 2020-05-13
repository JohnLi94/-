/*
事件对象、键盘事件、表单事件、ref获取dom节点、React实现类似vue双休数据绑定

事件对象：在触发DOM上的某个事件时，会产生一个事件对象event。这个对象中包含着所有与事件有关的信息
*/

import React from 'react';

class Home extends React.Component{

    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象。

    constructor(props){
        super(props);   //固定写法

        this.state = {

            msg:'我是一个Home组件',
            username:''
            
            }
        }

    // run = () =>{

    //     alert(this.state.msg);
    // }

    run = (event) =>{

        // alert(this.state.msg)

        //console.log(event);

        //alert(event.target);  //获取执行事件的dom节点

        event.target.style.background = 'red';  //改变事件对象的颜色
    
        //获取dom的属性
        alert(event.target.getAttribute('aid'))
    }

    inputChange = (e) =>{

        // 表单改变时触发，打印111
        // console.log('111');

        //获取表单的值，打印信息
        console.log(e.target.value);

        // 把这个输入的值赋给username
        this.setState({
            username:e.target.value
        })
    }

    getInput = () =>{

        alert(this.state.username)
    }

    render(){

        return(

            <div>

                {this.state.msg}

                {/* 事件对象 */}

                <h2>事件对象演示</h2>

                {/* button按钮自定义属性是aid */}
                <button aid = "123" onClick = {this.run}>事件对象</button>

                <br/><br/><hr/>

                <h2>表单事件</h2>

                {/* 获取表单的值                                
                1、监听表单的改变事件                             onChange
                2、在改变的事件里面获取表单输入的值                事件对象
                3、把表单输入的值赋值给username                   this.setState({})
                4、点击按钮的时候获取 state里面的username          this.state.username
                */}     
                <input onChange = {this.inputChange}/><button onClick = {this.getInput}>获取input值</button>
                {/* onChange指表单变化时执行 */}

                <br/><br/><hr/>
                
             </div>


        )
    }
}


export default Home;