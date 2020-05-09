import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
// static getDerivedStateFromProps(props, state) {
//     console.log('[persons.js] getDerivedState');
//     return state;
// }

shouldComponentUpdate(nextProps, nextState){
    console.log('[persons.js] shouldComponentUpdate');
    return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[persons.js] getSnapshotBeforeUpdate');
    return null;
}

componentDidUpdate(){
    console.log('[persons.js] ComponentDidUpdate');
}

    render(){
console.log('[Persons.js] rendering..');
return this.props.persons.map((person, index) => {
        return(
         <Person 
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event,person.ID)}
        name={person.name} 
        age={person.age}
        key={person.ID}/>
      );
      });
    }
}
export default Persons;

