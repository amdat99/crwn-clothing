import React from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux'
// import { auth , createUserProfileDoc } from '../../firebase/firebase'
import { signUpPending } from '../../redux/user/user.actions'

import './Signup.scss'

class Signup extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }

     handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        const { signUpPending } = this.props

        if(password !== confirmPassword){
            alert("passwords don't match")
        return;
        } 
    //     try {
    //         const { user } = await auth.createUserWithEmailAndPassword(email, password)
    //        await createUserProfileDoc(user,{displayName})
    //        this.setState=({
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''})
    //     } catch (error){
    //         console.log(error)
    //     }
    signUpPending({ displayName, email, password });
};

handleChange = event => {
  const { name, value } = event.target;

  this.setState({ [name]: value });
};

render() {
  const { displayName, email, password, confirmPassword } = this.state;
  return (
    <div>
      <h1>I do not have a account</h1>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={this.handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={this.handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
    signUpPending: userCredentials => dispatch(signUpPending(userCredentials))
});

export default connect(
null,
mapDispatchToProps
)(Signup);