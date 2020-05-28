

/*

实现js跳转路由：https://reacttraining.com/react-router/web/example/auth-workflow

1、要引入Redirect

    import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
    } from "react-router-dom";

2、定义一个flag
        this.state = { 
                loginFlag:false            
        };

3、render里面判断flag 来决定是否跳转

        if(this.state.loginFlag){

            return <Redirect to={{ pathname: "/" }} />;
        }

4、要执行js跳转

        通过js改变loginFlag的状态

        改变以后从新render 就可以通过Redirect自己来跳转


*/

import React, { Component } from 'react';

import {Redirect} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag:false            
        };
    }

    doLogin=(e)=>{

        e.preventDefault();
        

        let username=this.refs.username.value;

        let password=this.refs.password.value;


        console.log(username,password)

        if(username=='admin' && password=='123456'){

            //登录成功   跳转到首页

            this.setState({

                loginFlag:true
            })



        }else{

            alert('登录失败')
        }

    }
    render() {


        if(this.state.loginFlag){

            // return <Redirect to={{ pathname: "/" }} />;

            return <Redirect to='/' />;
        }
        return (    


            <div>
                 <br /> <br /> <br />

                <form onSubmit={this.doLogin}>

                        <input type="text"  ref="username" />  <br /> <br />

                        <input type="password"  ref="password" /> <br /> <br />

                         <input type="submit"  value="执行登录"/>

                </form>

               

            </div>
            
        );
    }
}

export default Login;
