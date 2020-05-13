import React from 'react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            username:'111'
         };
    }

    inputChange =(e) =>{

        this.setState({

            username:e.target.value
        })
    }

    setUsername =() =>{

        this.setState({

            username:'李四'
        })
    }

    render() {
        return (
            
            <div>

                <h2>双休数据绑定</h2>

                {/* model改变影响View vie改变反过来影响model */}

                <input value = {this.state.username} onChange = {this.inputChange}/>

                <p>{this.state.username}</p>

                <button onClick = {this.setUsername}>改变username的值</button>

            </div>

        );
    }
}

export default Todolist;