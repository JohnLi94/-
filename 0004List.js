import React from 'react';  //快捷键imr

//快捷键cccs
class List extends React.Component {    //快捷键后需要将Component改成React.Component
    constructor(props) {
        super(props);
        this.state = { 

            username:''
         };
    }

    inputChange = () =>{

        /*

            获取dom节点
                1、给元素定义ref属性
                    <input ref = "username" />
                2、通过this.refs.username获取dom节点

        */

        let val = this.refs.username.value;     //这里value大写会引起编译结果出现undefined

        this.setState({
            username:val
        })
    }

    getInput = () =>{

        alert(this.state.username);
    }

    //键盘事件,就会有事件对象e
    inputKeyUp = (e) =>{

        console.log(e.keyCode);

        if(e.keyCode == 13){    //回车是13

            alert(e.target.value);  //打印值
        }

    }

    inputKeyDown = (e) =>{
        console.log(e.keyCode);

        if(e.keyCode == 13){    //回车是13

            alert(e.target.value);  //打印值
        }
    }

    render() {
        return (
            
            <div>

                 {/* 获取表单的值                                
                1、监听表单的改变事件                             onChange
                2、在改变的事件里面获取表单输入的值                ref获取
                3、把表单输入的值赋值给username                   this.setState({})
                4、点击按钮的时候获取 state里面的username          this.state.username
                */}     
                <input ref = "username" onChange = {this.inputChange}/><button onClick = {this.getInput}>获取input值</button>
                {/* onChange指表单变化时执行 */}
            
                <br /> <br /> <hr />

                <h2>键盘事件</h2>

                {/* 键盘按下的方法 */}
                <input  onKeyUp = {this.inputKeyUp}/>

                <br /> <br /> 

                <input  onKeyDown = {this.inputKeyDown}/>
            
            </div>
        );
    }
}

export default List;
