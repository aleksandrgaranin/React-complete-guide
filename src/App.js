import React, { Component } from 'react';
import Radium from 'radium';

import './App.css';

import Person from './Person/Person';

class App extends Component { 
  state = {  
    persons: [
      { id: 'awd1', name: 'Max', age: 28},
      { id: 'adsawd1', name: 'Manu', age: 29},
      { id: 'sfSEf3', name: 'Stephanie', age: 26}
    ],
  };    
      

  deletePersonsHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  
  render(){
    const style ={
      backgroundColor:'green',
      color:'white',
      font: 'innerit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}       
      </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color:'black'
      }
    }

    let classes = []; 
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes =['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //classes = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi,I'm React app</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}         
      </div>
    );
  }};
export default Radium(App);

/**/