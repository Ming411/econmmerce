import React, {useContext, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router';
import {Menu} from 'antd';
import type {MenuProps} from 'antd';
import {isAuth} from '../../helpers/auth';
import {Jwt} from '../../store/models/auth';
import {itemCount} from '../../helpers/cart';
import {TotalContext} from './AnotherStore';

let currentNav = 'home';
const Navigation: React.FC = () => {
  const [count, setCount] = useContext(TotalContext);
  useEffect(() => {
    setCount(itemCount());
  }, [count]);
  const items: MenuProps['items'] = !isAuth()
    ? [
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
        },
        {
          label: `购物车-${count}`,
          key: 'cart'
        }
      ]
    : [
        {
          label: '首页',
          key: 'home'
        },
        {
          label: '商城',
          key: 'shop'
        },
        {
          label: 'dashboard',
          key: 'dashboard'
        },
        {
          label: `购物车-${count}`,
          key: 'cart'
        }
      ];

  const navigate = useNavigate();
  const location = useLocation();
  // 判断角色类型
  function getDashboardUrl() {
    let url = '/user/dashboard';
    if (isAuth()) {
      const {
        user: {role}
      } = isAuth() as Jwt;
      if (role === 1) url = '/admin/dashboard';
    }
    return url;
  }

  /* 页面刷新后恢复高亮项 */
  if (location.pathname === '/') {
    currentNav = 'home';
  } else if (location.pathname === '/shop') {
    currentNav = 'shop';
  } else if (location.pathname === '/signin') {
    currentNav = 'signin';
  } else if (location.pathname === '/signup') {
    currentNav = 'signup';
  } else if (location.pathname === getDashboardUrl()) {
    currentNav = 'dashboard';
  } else if (location.pathname === '/cart') {
    currentNav = 'cart';
  } else {
    currentNav = '';
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
    } else if (e.key === 'dashboard') {
      navigate(getDashboardUrl());
    } else if (e.key === 'cart') {
      navigate('/cart');
    }
    currentNav = e.key;
  };
  return <Menu onClick={onClick} selectedKeys={[currentNav]} mode='horizontal' items={items} />;
};

export default Navigation;
