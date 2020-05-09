import React, { Component } from 'react';
import cssClasses from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass';
import Auxilary from '../hoc/Auxilary'



class App extends Component{

  constructor(props){
    super(props);
    console.log('App[js] constructor');
  }

  state = {
    persons: [
      { ID: '1',name : 'Maxi', age: 20},
      { ID: '2',name : 'Manu', age: 29},
      { ID: '3',name : 'steph', age: 22}
    ],
    otherState: 'something something',
    showPersons: false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler1 = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => {
        return p.ID === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]= person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (pindex) => {
        const persons = this.state.persons.slice();
        persons.splice(pindex, 1);
        this.setState({persons: persons});
  }

render(){
    console.log('[App.js] render')
    let persons = null;


    if (this.state.showPersons){

      persons =  <Persons 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler1}
            persons={this.state.persons}
            />;
    }

   return (
    <Auxilary>
    <Cockpit 
    title={this.props.appTitle}
    showPersons= {this.state.showPersons}
    length = {this.state.persons.length}
    toggle = {this.togglePersonsHandler}
     />
    {persons}
    </Auxilary>
  );

}
}

export default withClass(App,cssClasses.App);




