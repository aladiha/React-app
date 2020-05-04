import React from 'react';
import './Person.css';


const person = (args) => {
    
    return (
    <div className="Person">
        <p onClick={args.click}>I'am {args.name}! and iam {args.age} years old</p>
        <p>{args.children}</p>
        <input type="text" onChange={args.changed} value={args.name}/>
    </div>
    )
};

export default person;