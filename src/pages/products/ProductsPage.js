import React from 'react';
import  Products from './Products'
import WithSpinner from '../../components/loading-spinner/Loading-spinner'

import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import { isCollectionsLoaded } from '../../redux/shop/shop.selectors';

import './Products.scss';

const ProductsWithSpinner = WithSpinner(Products);

function ProductsPage({isLoaded, ...props}) {
    
    return (
        <div className="products">  
            <ProductsWithSpinner isLoading={!isLoaded} {...props} />
        </div>
    );
}
 const mapStateToProps= (createStructuredSelector)({
    isLoaded: isCollectionsLoaded
 })

export default connect(mapStateToProps)(ProductsPage);