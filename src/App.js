import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium , { StyleRoot }from "radium";
class App extends Component {

  state= {
    persons: [
      {id:'1',name:'Prdeep',age :21},
      {id:'2',name:'Pramod',age :30},
      {id:'3',name:'Rohit',age :30}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //    console.log('Event was generated.')
  //   //  this.state.persons[0].name="asgnlasgl";
  //   this.setState({
  //     persons: [
  //      {name:newName,age :18},
  //     {name:'Pramod',age :30},
  //     {name:'Rohit',age :30}
  //   ]})
  // }


  deletePersonHandler = (personIndex) => {
    //Use this 
    const persons = this.state.persons.slice();
    //OR Use this
    // const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({},this.state. persons[personIndex]);
    
    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})    
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
  render() {

    const style	= {
      backgroundColor:'green',
      color:'white',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      // ':hover': {
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    }

    let persons= null;
    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            key = {person.id}
            click={()=>this.deletePersonHandler(index)}
            changed={(event,)=>this.nameChangedHandler(event,person.id)}
            name={person.name}
            age={person.age}/>
          })}
        {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Min')}
          changed={this.nameChangedHandler}
          >My hobbies: Racing</Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        /> */}
      </div>
      );
      style.backgroundColor="red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }
    }
        // let classes = ['red','bold'].join(' ');
        let classes = [];
        if(this.state.persons.length <=2 )
        {
          classes.push('red');
        }
        if(this.state.persons.length <=1 )
        {
          classes.push('bold');
        }



    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i\'m a react app'));    
    return (
        <div className="App"  >
        <h1>A React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          // onClick={() => this.switchNameHandler('Max')}>Switch Name</button>
          onClick={this.togglePersonHandler}>Toggle Persons</button>

      {/* {
        this.state.showPersons === true ? */}
      {persons}
        {/* :null */}
    </div>
    );
  }
}

export default App;
