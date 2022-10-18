import React from 'react';
import {useNavigate, useLocation} from 'react-router';
import {Menu} from 'antd';
import type {MenuProps} from 'antd';
const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'home'
  },
  {
    label: '商城',
    key: 'shop'
  },
  {
    label: '登录',
    key: 'signin'
  },
  {
    label: '注册',
    key: 'signup'
  }
];
let currentNav = 'home';
const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  /* 页面刷新后恢复高亮项 */
  if (location.pathname === '/') {
    currentNav = 'home';
  } else if (location.pathname === '/shop') {
    currentNav = 'shop';
  } else if (location.pathname === '/signin') {
    currentNav = 'signin';
  } else if (location.pathname === '/signup') {
    currentNav = 'signup';
  }
  // 点击切换tab
  const onClick: MenuProps['onClick'] = e => {
    if (e.key === 'home') {
      navigate('/');
    } else if (e.key === 'shop') {
      navigate('/shop');
    } else if (e.key === 'signin') {
      navigate('/signin');
    } else if (e.key === 'signup') {
      navigate('/signup');
    }
    currentNav = e.key;
  };
  return <Menu onClick={onClick} selectedKeys={[currentNav]} mode="horizontal" items={items} />;
};

export default Navigation;
