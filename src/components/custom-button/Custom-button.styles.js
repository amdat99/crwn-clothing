import styled, {css}  from 'styled-components'

const buttonStyles = css`
background-color: black;
border: none;
color: white;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }`


 const InvertedButtonStyles = css` 
    background-color: white;
    color: black;
    border: 1px solid balck;
    
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
  }`

 const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    
    &:hover {
    background-color: #357ae8;
    border: none;
    }`

    const getButtonStyles = props => {
        if(props.googleSignIn){
            return GoogleSignInStyles
        }
        return props.inverted ? InvertedButtonStyles : buttonStyles
    };



export const CustomButtonContainer = styled.button`
  min-width: 150px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    
    ${getButtonStyles}
  `;
