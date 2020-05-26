import React , {Component} from 'react';

// 这三个都需引入，无需记忆看官方文档怎么引入的即可
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Pcontent from './components/Pcontent';

import "./assets/css/index.css"

class App extends Component {

  render(){

    return (
      //配置路由首先在GitHub里面搜索react-router
      //再找React Native router的网站
      //网站中WEB的Basic
      <Router>
        <div>
          
            <Route exact path="/" component = {Home} />
            <Route path="/pcontent/:id" component = {Pcontent} />

        </div>
      </Router>
    );
  }
}


export default App;
