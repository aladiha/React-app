import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxilary from '../../../hoc/Auxilary'
import PropTypes from 'prop-types';


class Person extends Component {
    render(){
    console.log('[person.js] rendering..');
        return (
         <Auxilary>
            <p onClick={this.props.click}>I'am {this.props.name}! and iam {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
         </Auxilary>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;