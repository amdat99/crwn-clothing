import React from 'react';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/sign-up/Signup';

import './Signin&Signup.scss';

function SigninAndSignup(props) {
    return (
        <div className="signinsignup">
            <Signin />
            <Signup />
        </div>
    );
}

export default SigninAndSignup;