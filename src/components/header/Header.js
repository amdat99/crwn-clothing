import React, { useState  } from 'react';

import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
// import { auth } from '../../firebase/firebase'
import CartIcon from '../cart-icon/Cart-icon'
import CartDropdown from  '../cart-dropdown/CartDropdown'

import './Header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import { createStructuredSelector } from 'reselect';
import { selectCartHidden, }  from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { signOutPending} from '../../redux/user/user.actions'



import {HeaderContainerdiv, LogoConatainerlink, OptionsContainerdiv, 
     OptionLink, DropdownContainerdiv,SearchConatainerlink } from './Header.styles'
import SearchBox from '../searchbox/Searchbox';


function Header({currentUser,hidden, collections,toggleCartHidden ,searchChange,signOutPending}) {

    const [shopDropdown, setShopDropdown] = useState(false)




   const onDropdownToggle = () => {
       setShopDropdown(!shopDropdown)
}

    return (
        <HeaderContainerdiv >
            <LogoConatainerlink to='/' >    
            <Logo />  
           
            </LogoConatainerlink>    
            
      
            
            <OptionsContainerdiv  >      
            
            <SearchConatainerlink to = '/products'>
              
                <SearchBox search = {searchChange}  />
            </SearchConatainerlink>
               <div onMouseLeave ={onDropdownToggle}>
               <OptionLink  onMouseOver={onDropdownToggle} 
               to='/shop'> SHOP </OptionLink>
               
               {shopDropdown
                ? <DropdownContainerdiv onMouseLeave ={onDropdownToggle}>
                { collections.map(collection =>(
                    <Link to={`/shop/${collection.title.toLowerCase()}`} key={collection.id}> 
                    {collection.title} </Link>
                   )) }
                </DropdownContainerdiv >
                :null}
                
                </div>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser
                    ? <OptionLink as ='a' onClick={ signOutPending }>SIGNOUT</OptionLink>
                    : <OptionLink to='/signin'>SIGN IN</OptionLink>
                } 
                <CartIcon />
              
            </OptionsContainerdiv  >{ hidden ? null 
           : <CartDropdown  />
                }
        </HeaderContainerdiv>
    );
}
 const mapStateToProps = (createStructuredSelector)  ({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden,
     collections: selectCollectionsForPreview

 })

 const mapDispatchToProps = (dispatch) => ({
     signOutPending: () => dispatch(signOutPending())
 });

export default connect(mapStateToProps, mapDispatchToProps)(Header);