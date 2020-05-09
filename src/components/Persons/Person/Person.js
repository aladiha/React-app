import React from 'react';
import classes from './Person.module.css';



const person = (args) => {
    console.log('[person.js] rendering..');
    return (
   <div className={classes.Person}>
        <p onClick={args.click}>I'am {args.name}! and iam {args.age} years old</p>
        <p>{args.children}</p>
        <input type="text" onChange={args.changed} value={args.name}/>
   </div>
    )
};

export default person;