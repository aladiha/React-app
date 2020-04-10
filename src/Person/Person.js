import React from 'react';



const person = (args) => {
  
    return (
    
    <div>
        <p>I'am {args.name}! and iam {args.age} years old</p>
        <p>{args.children}</p>
    </div>
    )
};

export default person;