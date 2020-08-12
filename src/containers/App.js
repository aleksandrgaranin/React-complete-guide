import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persosns';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  } 
  state = {  
    persons: [
      { id: 'awd1', name: 'Max', age: 28},
      { id: 'adsawd1', name: 'Manu', age: 29},
      { id: 'sfSEf3', name: 'Stephanie', age: 26}
    ],
    otherState:'some other value',
    showPersons: false,
    showCockpit: true
  }    

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }


  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componemtDidUpdate');
  }

  deletePersonsHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;});
    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  };
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  
  render(){
    console.log('[App.js] render')
    let persons = null; 

    if (this.state.showPersons){
      persons = (        
          <Persons persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler}/>);}
  
    return (
      <div className={styles.App} >
        <button 
        onClick={()=>{
          this.setState({showCockpit: false});
          }}>
            Remove Cockpit
          </button>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/> 
        ):null}
        {persons}         
      </div>      
    );
  }};
export default App;

/**/