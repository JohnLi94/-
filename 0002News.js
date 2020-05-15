import React from 'react';

import logo from '../assets/images/dlrb.jpg';
// 模块化引入图片

import '../assets/css/index.css';

class News extends React.Component{

    constructor(props){

        super(props);

        // {}绑定数据
        this.state = {
            msg : '新闻',

            // 循环数据要加key
            list:['1111' , '2222' , '3333'],
            list2:[<h2 key = '1'>我是一个h2</h2>,<h2 key = '2'>我是一个h2</h2>],
            list3:[
                {title:'新闻1111'},
                {title:'新闻2222'},
                {title:'新闻3333'},
                {title:'新闻4444'}
            ]
        }

    }

    render(){

        // 外部循环数据方式，循环数据要加key
        let listResult = this.state.list.map(function(value , key){

        return <li key = {key}>{value}</li>
        })

        return(

            <div className = "news">  

                {this.state.msg}

                <img src = {logo}/>
                {/* 模块化引入图片 */}

                <img src = {require('../assets/images/dlrb.jpg')} />
            
                <img src = "https://www.duitang.com/blog/?id=828465168.jpg" />
            
                <hr/>

                {this.state.list2}

                <hr/>

                <ul>
                    {listResult}
                </ul>

                <hr/>

                {/* 内部循环数据方式，循环数据要加key */}
                {
                    this.state.list3.map(function(value ,key){

                    return (<li key = {key}>{value.title}</li>)
                    }

                    )
                }
            </div>
        )
    }
}

export default News;
