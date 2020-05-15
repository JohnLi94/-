import React from 'react';
import ReactDOM from 'react-dom';
/*
  React 是 React的核心库。
  ReactDOM 是提供与 DOM 相关的功能。
*/

//import './index.css';   css可以删掉

/*
  引入App.js这个组件
*/
import App from './App';

//不用管，加快react运行速度的一个js文件
import * as serviceWorker from './serviceWorker';

/*
  和上面的意思一样：把App组件弄到root节点上
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*
  总结：
  1）src是主要开发使用文件
  2）index.js不用改这个文件，只需要删除css
*/
