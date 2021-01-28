import { createSelector } from 'reselect';
// import { collectionsSnapshotToMap } from '../../firebase/firebase';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key])
  :[]
);

export const selectCollectionsForProduct = createSelector(
  [selectCollections],
  collections => collections ? Object.values(collections)
  :[]
);

export const selectCollectionsforProductPage = createSelector(
  [selectCollections],
  collections => collections ? Object.values(collections).map(collection => collection.items)
  :null
  )



export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam]
    :null
  );



    export const selectIsCollectionFetching = createSelector(
      [selectShop],
      (shop) => shop.isFetching
    )
  export const isCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections

  )