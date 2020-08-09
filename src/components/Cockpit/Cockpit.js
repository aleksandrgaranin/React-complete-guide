import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const assinedClasses = []; 
    let btnClass = '';
    if( props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
       assinedClasses.push(classes.red); //classes =['red']
    }
    if(props.persons.length <= 1){
       assinedClasses.push(classes.bold); //classes = ['red','bold']
    }


    return(
        <div className={classes.Cockpit}>
            <h1>Hi,I'm React app</h1>
            <p className={assinedClasses.join(' ')}>
                This is working
            </p>
            <button 
            className={btnClass}
            onClick={props.clicked}>
                Toggle Persons
            </button> 
        </div>
    );
};

export default cockpit;