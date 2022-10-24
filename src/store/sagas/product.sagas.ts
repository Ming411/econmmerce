import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {API} from '../../config';
import {
  FilterProductAction,
  filterProductSuccess,
  FILTER_PRODUCT,
  GetProductAction,
  GetProductByIdAction,
  getProductByIdSuccess,
  getProductSuccess,
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
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
/* 分类筛选商品 */
function* handleFilterProduct(action: FilterProductAction): any {
  try {
    let response = yield axios.post(`${API}/products/filter`, action.payload);
    // console.log(response);
    yield put(filterProductSuccess(response.data, action.payload.skip));
  } catch (e) {}
}
function* handleGetProductById({payload}: GetProductByIdAction): any {
  try {
    let response = yield axios.get(`${API}/product/${payload.productId}`);
    // console.log(response.data);
    yield put(getProductByIdSuccess(response.data));
  } catch (e) {
    // console.log(e);
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct);
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct);
  yield takeEvery(GET_PRODUCT_BY_ID, handleGetProductById);
}
