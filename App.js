
/*

  react路由的配置：
    1、找到官方文档 https://reacttraining.com/react-router/web/example/basic

    2、安装  cnpm install react-router-dom --save


    3、找到项目的根组件引入react-router-dom

       import { BrowserRouter as Router, Route, Link } from "react-router-dom";

    4、复制官网文档根组件里面的内容进行修改  （加载的组件要提前引入）


         <Router>

                <Link to="/">首页</Link>

                <Link to="/news">新闻</Link>

                <Link to="/product">商品</Link>


               <Route exact path="/" component={Home} />
               <Route path="/news" component={News} />    
               <Route path="/product" component={Product} />   
         </Router>


         exact表示严格匹配


react动态路由传值

      1、动态路由配置

          <Route path="/content/:aid" component={Content} />   

      2、对应的动态路由加载的组件里面获取传值

            this.props.match.params

      跳转：<Link to={`/content/${value.aid}`}>{value.title}</Link>

react get传值  

      1、获取 this.props.location.search
         
*/

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';

import User from './components/User';

import Shop from './components/Shop';

import './assets/css/index.css'

class App extends Component {

  render() {
    return (

      <Router>
        <div>


          <header className="title">

             <Link to="/">首页组件</Link>

             <Link to="/user">用户页面</Link>


               <Link to="/shop">商户</Link>

          </header>

             
           <Route exact path="/" component={Home} />
           <Route path="/user" component={User} />

           <Route path="/shop" component={Shop} />
        
        
         
        </div>
      </Router>
    );
  }
}

export default App;
