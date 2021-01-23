import React from 'react';

import Directory from '../../components/directory/Directory';


import {HomePageContainer} from './homepage.styles'
import './homepage.scss';

const HomePage = () => (
  <HomePageContainer>
    <h1>CROWN CLOTHING</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
