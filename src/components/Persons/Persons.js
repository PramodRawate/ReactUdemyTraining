import React ,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor',props);
    }
    
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }
      
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Persons.js] Inside componentWillReceiveProps()',nextProps);
    }
     
    shouldComponentUpdate(nextProps,nextState) {
        console.log('[Persons.js] Inside shouldComponentUpdate()',nextProps,nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps,nextState) {
        console.log('[Persons.js] Inside componentWillUpdate()',nextProps,nextState );
    }

    componentDidUpdate() {
        console.log('[Persons.js] Inside componentDidUpdate()');
    }
    render () {
        console.log('[Persons.js] Inside componentDidMount()');
        return this.props.persons.map( (person,index) => {
            return <Person 
                name={person.name}
                age={person.age}
                key={person.id}
                clicked={() => this.props.clicked(index)}
                changed={(event)=>this.props.changed(event,person.id)}/>
        } );
    }
}

export default Persons;
// Functional Components
// const persons = (props) => props.persons.map( (person,index) => {
//         return <Person 
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             clicked={() => props.clicked(index)}
//             changed={(event)=>props.changed(event,person.id)}/>
//     } );
// export default persons;