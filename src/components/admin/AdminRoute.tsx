import React from 'react';
import Dashboard from './Dashboard';
import {isAuth} from '../../helpers/auth';
import {useLocation} from 'react-router-dom';
import {Jwt} from '../../store/models/auth';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
const AdminRoute = () => {
  const pathname = useLocation().pathname;
  const {
    user: {role}
  } = isAuth() as Jwt;
  // console.log(role, pathname);
  if (role && pathname === '/create/category') {
    return <AddCategory />;
  } else if (role && pathname === '/create/product') {
    return <AddProduct />;
  }
  return <Dashboard />;
};

export default AdminRoute;
