import React, { Component } from 'react';
import Comp from './components/component'

class App extends Component {
constructor() {
  super()
  this.state = {
   inputText: '',
   test:'state test',
   func(param){
      return param;
    }
  }
  this.foo = (param)=>{
      return param;
    }
    this.onChange = this.onChange.bind(this)
 }



 onChange(e){
  this.setState({
    inputText: e.target.value
  })
 }

  render() {
    return (
      <div>
      <Comp />
      <p id='testProps'>{this.props.testProps}</p>
      <p>{this.state.test}</p>
      <input value='initial' onChange={this.onChange.bind(this)} />
      <button disabled={true}>Disabled button</button>

      </div>
    );
  }
}

export default App;
