import React, { Component } from 'react';
import axios from 'axios';

class Comp extends Component {
  constructor() {
    super();
    this.state = {
      rate: "",
      inputValue:''
    }
    this.getData = this.getData.bind(this);
  }
  inputChange=(e)=>{
    this.setState({
      inputValue: e.target.value
    })
  }
  async getData() {
    const result = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=abce00147b0566534c2aa99ed56b6cd5"
    );
    this.setState({ rate: result.data.name });
  }
    render() {
      return (<div>
        <button className="btn" onClick={this.getData}>
          {this.props.sex}
        </button>
        <button className="btn1" onClick={this.props.foo}>
        </button>
        <input className='input' onChange={this.inputChange} />
            </div>
      );
    }
  }

  export default Comp;