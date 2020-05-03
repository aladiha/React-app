import React from 'react';
import './Person.css';


const person = (args) => {
    
    return (
    <div className="Person">
        <p>I'am {args.name}! and iam {args.age} years old</p>
        <p>{args.otherState}</p>
        <p>{args.children}</p>
        <p><input type="text" onChange={args.changed} value={args.name}/></p>
    </div>
    )
};

export default person;