import styled  from 'styled-components'
import { Link } from 'react-router-dom'



export const HeaderContainerdiv = styled.div`
height: 60px;
width: 97%;
display: flex;
justify-content: space-between;
margin-bottom: 50px;
position: fixed;
top: 0;
left: 0;
z-index: 5;
background: white;
shadow: 5px 5px 5px;
`;

export const LogoConatainerlink = styled(Link)`
height: 90%;
width: 70px;
padding: 25px;
right: -40px;
top: -20px;
position: relative;

`;

export const SearchConatainerlink = styled(Link)`
height: 100%;
width: 150px;
padding: 25px;
top: -5px;
left:-50px;
position: relative;



`;




export const OptionsContainerdiv = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const DropdownContainerdiv = styled.div`
 

    font-size: 14px;
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 7px;
    shadow: 5px 5px;
    border: 1px solid black;
    background-color: white;
     position: fixed;
   
    z-index: 5;`

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`;

