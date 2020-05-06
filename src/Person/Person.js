import React from 'react';
import styled from 'styled-components'
//import './Person.css';


const Styleddiv = styled.div` 
    width: 60%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    background-color: white;
    padding: 16px;
    text-align:center;


    @media (min-width: 500px){
            width: 450px;
    }
    `;

const person = (args) => {
    const style = {
            '@media (min-width: 1000px)':{
                width: '450px'
            }
    };
    return (
  //  <div className="Person" style={style}>
  <Styleddiv>
       
        <p onClick={args.click}>I'am {args.name}! and iam {args.age} years old</p>
        <p>{args.children}</p>
        <input type="text" onChange={args.changed} value={args.name}/>
        </Styleddiv>
    //</div>
    )
};

export default person;