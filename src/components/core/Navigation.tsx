import React, {useState} from 'react';
import {useNavigate} from 'react-router';
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
  }
];

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = e => {
    if (e.key === 'home') {
      navigate('/');
    } else if (e.key === 'shop') {
      navigate('/shop');
    }
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};

export default Navigation;
