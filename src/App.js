import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const ToggleButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'blue'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
margin-bottom: 10px;
  &:hover {
  background-color: ${props => props.alt ? 'pink' : 'lightblue'};
  color: 'black'
  }
`;


class App extends Component{

  state = {
    persons: [
      { ID: '1',name : 'Maxi', age: 20},
      { ID: '2',name : 'Manu', age: 29},
      { ID: '3',name : 'steph', age: 22}
    ],
    otherState: 'something something',
    showPersons: false
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

    /*this.setState({
      persons: [
        { name : event.target.value , age: 30},
        { name : 'aladin' , age: 29},
        { name : 'steph', age: 22}
      ]
    })*/
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

    let persons = null;

    if (this.state.showPersons){
      persons = (
      <div>
        {

        this.state.persons.map((aa, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          changed={(event) => this.nameChangedHandler1(event,aa.ID)}
          name={aa.name} 
          age={aa.age}
          key={aa.ID}/>
        })

       } 
      </div> 
      );
  
    }

    let classes =[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    classes = classes.join(' ');

   return (
    <div className="App">
       <p className={classes}>this is my app</p>
      <br/>
      <ToggleButton 
      alt={this.state.showPersons}
      onClick={this.togglePersonsHandler}>toogle persons</ToggleButton>
      <br/>
      {persons} 
    </div>
  );

}
}

export default App;




