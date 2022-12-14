import {lazy} from 'react';

const Home = lazy(() => import('../components/core/Home'));
const Shop = lazy(() => import('../components/core/Shop'));
const Signin = lazy(() => import('../components/core/Signin'));
const Signup = lazy(() => import('../components/core/Signup'));
const PrivateRoute = lazy(() => import('../components/admin/PrivateRoute'));
// const AddCategory = lazy(() => import('../components/admin/AddCategory'));
const AdminRoute = lazy(() => import('../components/admin/AdminRoute'));
const Product = lazy(() => import('../components/core/Product'));
const Cart = lazy(() => import('../components/core/Cart'));
const Success = lazy(() => import('../components/core/Success'));

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/user/dashboard',
    element: <PrivateRoute />
  },
  {
    path: '/admin/dashboard',
    element: <PrivateRoute />
  },
  {
    path: '/create/category',
    // element: <AddCategory />
    element: <AdminRoute />
  },
  {
    path: '/create/product',
    element: <AdminRoute />
  },
  {
    path: '/product/:productId',
    element: <Product />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/success',
    element: <Success />
  }
];
export default routes;
