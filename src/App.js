import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state = {
     persons: [
       { name : 'Max', age: 28},
       { name : 'Manu', age: 29},
       { name : 'steph', age: 26}
     ]
   }
   switchNameHandler = () => {
        //console.log('was clicked');
        this.setState({});

   }
   render(){
   return (
    <div className="App">
      <button onClick={this.switchNameHandler}>switch names</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}><p>My hobbies racing</p></Person>

       
    </div>
  );
}
}
export default App;
