import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons: [
      { name : 'Maxi', age: 20},
      { name : 'Manu', age: 29},
      { name : 'steph', age: 22}
    ],
    otherState: 'something something'
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState({
      persons: [
        { name : 'Maxi', age: 30},
        { name : 'al', age: 29},
        { name : 'steph', age: 22}
      ]
    })
  }

  
  nameChangedHandler1 = (event) => {
    this.setState({
      persons: [
        { name : event.target.value , age: 30},
        { name : 'aladin' , age: 29},
        { name : 'steph', age: 22}
      ]
    })
  }

  nameChangedHandler2 = (event) => {
    this.setState({
      persons: [
        { name : 'Maxi', age: 30},
        { name : event.target.value , age: 29},
        { name : 'steph', age: 22}
      ]
    })
  }

  
  nameChangedHandler3 = (event) => {
    this.setState({
      persons: [
        { name : 'Maxi', age: 30},
        { name : 'aladin' , age: 29},
        { name : event.target.value , age: 22}
      ]
    })
  }

render(){

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '3px solid blue',
        padding: '8px', 
        cursor: 'pointer'
    };

   return (
    <div className="App">
       <h1>this is my app</h1>
      <br/>
      <p>
      <button 
      style = {style}
      onClick={this.switchNameHandler}>switch names</button>
      </p>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      otherState={this.state.otherState}
      changed={this.nameChangedHandler1}
      />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      otherState={this.state.otherState}
      changed={this.nameChangedHandler2}
      />
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}
      otherState={this.state.otherState}
      changed={this.nameChangedHandler3}
      />
    </div>
  );
}
}

export default App;




