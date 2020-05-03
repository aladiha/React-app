import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>  {

  const [personsState , setPersonsState] = useState({
    persons: [
      { name : 'Max', age: 28},
      { name : 'Manu', age: 29},
      { name : 'steph', age: 26}
    ]
  });

  const switchNameHandler = () => {
    //console.log('was clicked');
    setPersonsState({
      persons: [
        { name : 'Maxi', age: 30},
        { name : 'Manu', age: 29},
        { name : 'steph', age: 22}
      ]
    });

  };

   return (
    <div className="App">
      <button onClick={switchNameHandler}>switch names</button>
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age}
      />
      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      />
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;




