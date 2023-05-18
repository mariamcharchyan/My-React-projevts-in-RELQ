import React, {Component} from 'react';

class ClassComponent1 extends Component {
state= {text: "some text"}
    render() {
        return (
            <div>
                <h3>ClassComponent1: classComponents-i orinak</h3>
                {this.state.text}
                <button onClick={()=>{
                    this.setState({text:"another text"})
                }}>add</button>
            </div>
        );
    }
}

export default ClassComponent1;