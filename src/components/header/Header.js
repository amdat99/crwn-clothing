import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import CartIcon from '../cart-icon/Cart-icon'
import CartDropdown from  '../cart-dropdown/CartDropdown'


import './Header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden}  from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';

function Header({currentUser,hidden}) {
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
                <CartIcon />
              
            </div>{ hidden ? null 
           : <CartDropdown />
                }
        </div>
    );
}
 const mapStateToProps = (createStructuredSelector)  ({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden
 })
export default connect(mapStateToProps)(Header);