import React from 'react';
import NavBar from '../NavBar'
import './Style.css';

export default class mainWrapper extends React.Component{
    render () {

        

        return (
            <h1>
                <NavBar id={`MainWrapperBody`}/>
                Main Wrapper

            </h1>
        )
    }

}