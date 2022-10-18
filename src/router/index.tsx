import {lazy} from 'react';

const Home = lazy(() => import('../components/core/Home'));
const Shop = lazy(() => import('../components/core/Shop'));
const Signin = lazy(() => import('../components/core/Signin'));
const Signup = lazy(() => import('../components/core/Signup'));

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
  }
];
export default routes;
