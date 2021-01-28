import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { isCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/loading-spinner/Loading-spinner'

import CollectionPage from './Collection-page'


const mapStateToProps = createStructuredSelector({
    isLoading: state => !isCollectionsLoaded(state)
  });

    const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionPage);

    export default CollectionPageContainer;