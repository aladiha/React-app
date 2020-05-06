import React from 'react';
import Radium from 'radium'
import './Person.css';


const person = (args) => {
    const style = {
            '@media (min-width: 500px)':{
                width: '450px'
            }
    };
    return (
    <div className="Person" style={style}>
        <p onClick={args.click}>I'am {args.name}! and iam {args.age} years old</p>
        <p>{args.children}</p>
        <input type="text" onChange={args.changed} value={args.name}/>
    </div>
    )
};

export default Radium(person);