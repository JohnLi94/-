import React , {Component} from 'react';

import Lifecycle from './components/Lifecycle.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state= {
      title:'我是app组件的 title',
      flag:true
    }
  }

  setFlage =() =>{

    this.setState({

      flag:!this.state.flag
    })
  }

  setTitle =() =>{

    this.setState({

      title:'我是父组件改变后的title'
    })
  }

  setTitle

  render(){

    return (
      <div className="App">

        {

          this.state.flag?<Lifecycle title = {this.state.title} />:""

        }
      
      <br />
      <br />

      <hr />

      <button onClick = {this.setFlag}>挂载和销毁生命周期组件</button>

      <br />
      <br />

      <button onClick = {this.setTitle}>改变父组件 title的值</button>

      </div>
    );
  }
}


export default App;
