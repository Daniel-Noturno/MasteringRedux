import { all, takeLatest } from 'redux-saga/effects';

import { Types as favoritesTypes } from '~/store/ducks/favorites';
import { addFavoriteRequest } from './favorites';

export default function* rootSaga() {
  return yield all([
    takeLatest(favoritesTypes.ADD_REQUEST, addFavoriteRequest),
  ]);
}
