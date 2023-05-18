
import React, { Component } from 'react';

export default class ClassComponent2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         name:""
//     };
//   }
// sa hnacvac greladzev e uxaki karox enq grel state = {name:''}
state = {name:''}

  render() {
    return (
      <>
        <h3>
         ClassComponent2: Aragadranq3-y stanal classComponent-ov
        </h3>
        <input
          type="text"
          value = {this.state.name}
          onChange={(evt) => this.setState({
            name: evt.target.value
          })}
        />
        <p>{this.state.name}</p>
      </>
    );
    }
}