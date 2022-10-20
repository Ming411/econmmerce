import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {API} from '../../config';
import {getCategorySuccess, GET_CATEGORY} from '../actions/category.actions';

function* handleGetCategory(): any {
  try {
    let response = yield axios.get(`${API}/categories`);
    // console.log(response);
    yield put(getCategorySuccess(response.data));
  } catch (error) {}
}

export default function* categorySaga() {
  yield takeEvery(GET_CATEGORY, handleGetCategory);
}
