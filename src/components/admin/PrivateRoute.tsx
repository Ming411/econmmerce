import React from 'react';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import {isAuth} from '../../helpers/auth';
import {Navigate, useLocation} from 'react-router-dom';
import {Jwt} from '../../store/models/auth';
/* 该组件用于控制用户是否已登录 */
const PrivateRoute = () => {
  const pathname = useLocation().pathname;

  if (isAuth()) {
    const {
      user: {role}
    } = isAuth() as Jwt;
    // 角色不同返回不同dashboard
    if (role && pathname === '/admin/dashboard') {
      return <AdminDashboard />;
    } else if (!role && pathname === '/user/dashboard') {
      return <Dashboard />;
    }
  }
  return <Navigate to='/signin' />;
};

export default PrivateRoute;
