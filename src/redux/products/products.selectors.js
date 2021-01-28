import { createSelector } from 'reselect';
// import { collectionsSnapshotToMap } from '../../firebase/firebase';

const selectProducts = state => state.products;

export const selectProducts = createSelector(
  [selectProducts],
  products => products.items
);