import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { isCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/loading-spinner/Loading-spinner'

import CollectionOverview from './Collections-overview'


const mapStateToProps = createStructuredSelector({
    isLoaded: state => !isCollectionsLoaded(state)
  });

    const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionOverview);

    export default CollectionOverviewContainer;
