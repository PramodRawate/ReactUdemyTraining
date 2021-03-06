import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor',props);
    }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }
      
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }
    render () {
        console.log('[Person.js] Inside componentDidMount()');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clicked}>Im a {this.props.changed} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
           </div>
         )
    }
}
export default Person; 

// Functional Components

// const person = (props) => {
//     return (
//             <div className={classes.Person}>
//             <p onClick={props.clicked}>Im a {props.changed} and I am {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// }
// export default person;