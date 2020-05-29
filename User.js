import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Info from './User/Info';
import Main from './User/Main';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个User组件'
         };
    }    
    render() {
        return (
            <div className="user">
               

               <div className="content">


                   <div className="left">

                        <Link to="/user/">个人中心</Link>

                        <br />
                        <br />

                        <Link to="/user/info">用户信息</Link>


                    </div>

                    <div className="right">

                            
                            <Route exact path="/user/" component={Main} />

                            <Route  path="/user/info" component={Info} />

                    </div>


               </div>


            </div>
        );
    }
}

export default User;
