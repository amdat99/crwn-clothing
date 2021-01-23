import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 330px;
  align-items: center;
  position: relative;
  min-width: 180px;
  max-width: 300px;
  margin-right: 10px;
  
  
  &:hover {
    .image {
    opacity: 0.8;
    }
 `;

export const AddButton = styled(CustomButton)`
    width: 95%;
    background: white;
    color: black;
    display: none;
    position: absolute;
    top: 220px;
           
`;

export const BackgroundImage = styled.div`
  width: 95%;
  height: 96%;
  background-size: cover;
  background-position: center;
  margin-bottom: 70px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  

&:hover {
    .custom-button {
        background: white;
        color: black;
        opacity: 0.8;
        display: flex
`;
 


export const CollectionFooterContainer = styled.div`
   width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
   width: 90%;
      bottom: -265px;
      position: relative;
      font-size: 14px;
`;

export const PriceContainer = styled.span`
       width: 10%;
      bottom: -265px;
      position: relative;
      color: red;
      padding-right: 50px;
`;