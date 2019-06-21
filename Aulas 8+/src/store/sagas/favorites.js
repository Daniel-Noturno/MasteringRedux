import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as favoriteActions } from '~/store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(favoriteActions.addFavoriteError('Repositório Duplicado'));
    } else {
      yield put(favoriteActions.addFavoriteSuccess(response.data));
    }
  } catch (err) {
    yield put(favoriteActions.addFavoriteError('Repositório Inexistente'));
  }
}
