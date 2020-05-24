import React, { Component } from 'react';
import { Link } from 'react-router-dom';    //这里用到Link必须引入Link

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'1',
                    title:'我是新闻111'
                },
                {
                    aid:'2',
                    title:'我是新闻222'
                },
                {
                    aid:'3',
                    title:'我是新闻333'
                },
                {
                    aid:'4',
                    title:'我是新闻444'
                }
            ]
         };
    }
    render() {
        return (

            <div>

                我是News组件

                <ul>

                    {
                        this.state.list.map((value , key) =>{

                            return (
                                <li key = {key}>
                                    {/* 这里用到了$看官方如何传值的,旁边的`是Esc下面的按键 */}
                                <Link to = {`/content/${value.aid}`}>{value.title}</Link>
                                
                                </li>
                            )
                        })
                    }

                 </ul>

            </div>
            
        );
    }
}

export default News;
