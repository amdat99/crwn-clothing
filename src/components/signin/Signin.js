import React, { Component } from 'react';

import FormInput from '../formInput/FormInput'
import CustomButton from '../custom-button/CustomButton';

import {auth, SignInWithGoogle}  from '../../firebase/firebase'

import './Signin.scss';

class Signin extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error){
            console.error(error)
        }
        
      };

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an acount</h2>
                    <span> Sign in with your Email and Password</span>
                
                <form  onSubmit = {this.handleSubmit}>
                    
                    <FormInput name="email" type="email" value={this.state.email} 
                     onChange={this.handleChange} label='email'required/>
                   
                    <FormInput name="password" type="password" value={this.state.password} 
                     onChange={this.handleChange} label ='password' required/>
                    <div className="button">
                    <CustomButton  type="submit" > Sign In </CustomButton>
                    <CustomButton type ='button' onClick ={SignInWithGoogle} googleSignIn = {true} > {' '}Sign In With Google{' '} </CustomButton>
                    </div>

                </form>
                
            </div>
        );
    }
}

export default Signin;