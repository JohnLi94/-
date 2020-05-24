import React, { Component } from 'react';
import { Link } from 'react-router-dom';    //这里用到Link必须引入Link

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            list:[
                {
                    aid:'1',
                    title:'我是商品111'
                },
                {
                    aid:'2',
                    title:'我是商品222'
                },
                {
                    aid:'3',
                    title:'我是商品333'
                },
                {
                    aid:'4',
                    title:'我是商品444'
                }
            ]

         };
    }
    render() {
        return (

            <div>

                我是商品组件

                <ul>

                    {
                        this.state.list.map((value , key) =>{

                            return (
                                <li key = {key}>
                                    {/* 这里用到了$看官方如何传值的,旁边的`是Esc下面的按键 */}
                                    {/* ?aid=属于get传值方法 */}
                                <Link to = {`/Productcontent?aid=${value.aid}`}>{value.title}</Link>
                                
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
            
        );
    }
}

export default Product;