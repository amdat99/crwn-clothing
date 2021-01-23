import React from 'react';
import  Products from './Products'
import LoadingSpinner from '../../components/loading-spinner/Loading-spinner'

function ProductsPage({loading}) {
    console.log(loading)
    return (
        <div> {loading ? <div> <h1>loading</h1> <LoadingSpinner /></div> :
            <Products />}
        </div>
    );
}

export default ProductsPage;