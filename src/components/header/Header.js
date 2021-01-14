import React from 'react';
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase'

import './Header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

function Header({currentUser}) {
    return (
        <div className="header">
            <Link className="logo-container" to='/' >    
                <Logo className="logo"/>    
            </Link>   
            <div className="options" >
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser
                    ? <Link className="option" onClick={() => auth.signOut()}>SIGNOUT</Link>
                    : <Link className="option" to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    );
}

export default Header;