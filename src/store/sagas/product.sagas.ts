import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {API} from '../../config';
import {
  GetProductAction,
  getProductSuccess,
  GET_PRODUCT,
  SearchProductAction,
  searchProductSuccess,
  SEARCH_PRODUCT
} from '../actions/product.actions';

// 获取商品列表
function* handleGetProduct({sortBy, order, limit}: GetProductAction): any {
  try {
    let response = yield axios.get(`${API}/products`, {
      params: {
        sortBy,
        order,
        limit
      }
    });
    yield put(getProductSuccess(response.data, sortBy));
  } catch (error) {}
}
// 获取搜索查询列表
function* handleSearchProduct({payload: {search, category}}: SearchProductAction): any {
  try {
    let response = yield axios.get(`${API}/products/search`, {
      params: {
        search,
        category
      }
    });
    yield put(searchProductSuccess(response.data));
  } catch (error) {}
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct);
}
