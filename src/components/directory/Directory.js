import React from 'react';
import MenuItem from '../menu-item/Menu-item';

import { createStructuredSelector }  from 'reselect'
import { connect } from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import './Directory.scss';

const Directory = ({sections}) => {
   

        return (
            <div className='directory-menu'>
                {
                    sections.map(section => {    
                return <MenuItem key= {section.id} title={section.title} imageUrl = {section.imageUrl}
                        size = {section.size} linkUrl = {section.linkUrl}/>

                    }) }
            </div>
        );
    
}
const mapStateToProps = (createStructuredSelector) ({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);