import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

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
           <button onClick={authContext.login}>Log in</button>            
        </div>
    );
};

export default React.memo(Cockpit);