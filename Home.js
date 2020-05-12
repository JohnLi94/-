import React from 'react';

class Home extends React.Component{

    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象。

    constructor(props){
        super(props);   //固定写法

        this.state = {

            msg:'我是一个Home组件',
            message:'我是一个message',
            username:'itying'
            }

            // 第二种改变this指向方法
            this.getMessage = this.getMessage.bind(this);
        }

    run(){
        alert('我是一个run方法')
    }

    // 可以获取到msg
    getData(){
        alert(this.state.msg);
    }

    getMessage(){
        alert(this.state.message);
    }

    // 变成指向当前
    getName = () =>{
        alert(this.state.username);
    }

    // setDate等于一个function再加个箭头
    setData = () =>{

        this.setState({

            msg:'我是一个改过的home组件'
        })
    }

    setName = (str) =>{

        this.setState({

            username:str
        })
    }

    render(){

        return(

            <div>

                <h2>{this.state.msg}</h2>

                <h2>{this.state.username}</h2>

                {/* 一点击就调用了run方法 ,*/}
                <button onClick = {this.run}>执行方法</button>

                <br/>
                <br/>

                {/* 获取数据的方法 ，第一种调用时指定bind*/}
                <button onClick = {this.getData.bind(this)}>获取数据方法----第一种方法</button>
               
                <br/>
                <br/>

                {/* 第二种在构造函数指定 */}
                <button onClick = {this.getMessage}>获取数据方法----第二种方法</button>

                <br/>
                <br/>

                {/* 第三种用箭头函数指定，最常用 */}
                <button onClick = {this.getName}>获取数据方法----第三种方法</button>
             
                <br/>
                <br/>

                <button onClick = {this.setData}>改变state里面的值</button>
            
                <br/>
                <br/>

                {/* 把username改成了张三 */}
                <button onClick = {this.setName.bind('this', '张三')}>执行方法传值</button>
             </div>


        )
    }
}


export default Home;