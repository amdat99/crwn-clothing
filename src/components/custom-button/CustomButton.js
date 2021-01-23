import React from 'react';

 import {CustomButtonContainer} from './Custom-button.styles'

//  import './CustomButton.scss';

function CustomButton({children,  ...props}) {
    return (
       <CustomButtonContainer {...props} > 
            {children}
       </CustomButtonContainer>
    );
}

export default CustomButton;