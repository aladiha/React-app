import React, { useEffect } from 'react'
import cssClasses from './Cockpit.module.css';


const Cockpit = (props) => {

    useEffect(() => {
        console.log('cockpit.js useEffict');
        setTimeout(() => {
            alert('saved data to cloud!')
        },1000);
    },[]);

    let classes =[];
    let btnClass = '';

    if (props.showPersons){
        btnClass = cssClasses.Red;
    }

    if(props.length <= 2){
      classes.push(cssClasses.red);
    }

    if(props.length <= 1){
      classes.push(cssClasses.bold);
    }

    classes = classes.join(' ');


return (
<div className={cssClasses.Cockpit}>
        <h1>{props.title}</h1>
      <p className={classes}>this is my app</p>
      <br/>
      <button 
      className={btnClass}
      onClick={props.toggle}>toogle persons</button>
      <br/>

</div>
);
}

export default React.memo(Cockpit);

