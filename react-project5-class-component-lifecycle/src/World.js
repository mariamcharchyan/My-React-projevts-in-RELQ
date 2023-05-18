import {Component} from 'react';

export default class World extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: '',
    //         age: 27
    //     };
    // }
    state = {
        name: '',
        age: 27
    };
    componentDidMount(){
        console.log('mounted');
    }

    //return true;
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('update');
    }

    componentWillUnmount(){

    }

    render(){
        const {name, age} = this.state;
        const {seySomething}= this.props;
        return(
            <>
                <h1>{name} - {age}</h1>
                {seySomething}
                <input
                    type= 'text'
                    value = {name}
                    onChange = {(e) => this.setState({
                        name: e.target.value
                    })}
                />
            </>
        );
    }
}