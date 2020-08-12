import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    

    useEffect(()=> {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        // setTimeout(()=>{
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return ()=>{            
            console.log('[Cocpit.js] clean up work in useEffect');
        };
    }, []);  

    useEffect(()=>{
        console.log('[Cockpip.js] 2nd useEffect')
        return ()=>{
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    
    });

    const assinedClasses = []; 
    let btnClass = '';
    if( props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){
       assinedClasses.push(classes.red); //classes =['red']
    }
    if(props.personsLength <= 1){
       assinedClasses.push(classes.bold); //classes = ['red','bold']
    }


    return(
        <div className={classes.Cockpit}>
            <h1>Hi,I'm React app</h1>
            <p className={assinedClasses.join(' ')}>
                This is working
            </p>
            <button
            ref={toggleBtnRef} 
            className={btnClass}
            onClick={props.clicked}>
                Toggle Persons
            </button> 
        </div>
    );
};

export default React.memo(Cockpit);