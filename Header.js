import React, { Component } from 'react';

/*

父组件给子组件传值：

    defaultProps：父子组件传值中，如果父组件调用子组件的时候不给子组件传值，则可以在子组件中使用defaultProps定义的默认值

    propTypes：验证父组件传值的类型合法性

        1、引入 import PropTypes from 'prop-types';

        2、类.propTypes = {
            name:PropTypes.string
        };

    都是定义在子组件里面

*/

import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            msg:"我是一个头部组件"
         };
    }
    render() {
        return (

            <div>

                <h2>---{this.props.title}---{this.props.num}</h2>

            </div>
            
        );
    }
}

//defaultProps，如果父组件调用子组件的时候不给子组件传值，则可以在子组件中使用defaultProps定义的默认值
Header.defaultProps = {

    title:'标题'
}

//同行propTypes定义父组件给子组件传值的类型
Header.propTypes = {

    num:PropTypes.number
}

export default Header;