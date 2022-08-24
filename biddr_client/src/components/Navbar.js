import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }

    return(
        <nav>
            
        </nav>
    )

}