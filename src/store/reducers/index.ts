import {combineReducers} from 'redux';
import authReducer, {AuthState} from './auth.reducer';
import categoryReducer, {CategoryState} from './category.reducer';
import productReducer, {ProductState} from './product.reducer';
export interface AppState {
  auth: AuthState;
  category: CategoryState;
  product: ProductState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product: productReducer
});
export default rootReducer;
