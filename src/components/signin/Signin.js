import React, {  useState } from 'react';

import FormInput from '../formInput/FormInput'
import CustomButton from '../custom-button/CustomButton';
// 


// import {auth}  from '../../firebase/firebase'

import { googleSignInPending, emailSignInPending } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

import './Signin.scss';
const Signin = ({emailSignInPending, googleSignInPending}) => {
    const [signInInfo, setSignInInfo] = useState({email: '', password: ''})

    
    // constructor(props) {
    //     super(props);
       
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }
    
    const { email, password } = signInInfo
   const  handleSubmit = async event => {
        event.preventDefault();
       
       
        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' });
        // } catch(error){
        //     console.error(error)
        // }
        emailSignInPending(email,password)
        
      };

      

   const handleChange = (event) => {
        const {value, name} = event.target;
        
        setSignInInfo({ ...signInInfo,[name]:value})
    }

      
        return (
            <div className="sign-in">
                <h2>I already have an acount</h2>
                    <span> Sign in with your Email and Password</span>
                
                <form  onSubmit = {handleSubmit}>
                    
                    <FormInput name="email" type="email" value={email} 
                     onChange={handleChange} label='email'required/>
                   
                    <FormInput name="password" type="password" value={password} 
                     onChange={handleChange} label ='password' required/>
                    <div className="button">
                    <CustomButton  type="submit" > Sign In </CustomButton>
                    <CustomButton type ='button' onClick ={googleSignInPending} googleSignIn > {' '}Sign In With Google{' '} </CustomButton>
                    </div>

                </form>
                
            </div>
        );
    }

const mapDispatchToProps = dispatch => ({
    googleSignInPending: () => dispatch(googleSignInPending()),
    emailSignInPending: (email, password) =>dispatch(emailSignInPending({ email, password })) 
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Signin);