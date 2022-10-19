import {Col, Descriptions, Menu, Row} from 'antd';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ShoppingCartOutlined, UserOutlined, OrderedListOutlined} from '@ant-design/icons';
import Layout from '../core/Layout';
import {Typography} from 'antd';
import type {MenuProps} from 'antd';
import {isAuth} from '../../helpers/auth';
import {Jwt} from '../../store/models/auth';

const {Title} = Typography;
const items: MenuProps['items'] = [
  {
    label: '添加分类',
    key: 'classify',
    icon: <ShoppingCartOutlined />
  },
  {
    label: '添加产品',
    key: 'product',
    icon: <UserOutlined />
  },
  {
    label: '添加列表',
    key: 'list',
    icon: <OrderedListOutlined />
  }
];
const AdminDashboard = () => {
  const {
    user: {name, email}
  } = isAuth() as Jwt;
  const AdminLinks = () => {
    const [current, setCurrent] = useState('classify');
    let navigate = useNavigate();
    const onClick: MenuProps['onClick'] = e => {
      if (e.key === 'classify') {
        navigate('/create/category');
      }
      setCurrent(e.key);
    };
    return (
      <>
        <Title level={5}>管理员链接</Title>
        <Menu onClick={onClick} selectedKeys={[current]} items={items} />
      </>
    );
  };
  const adminInfo = () => (
    <Descriptions title='管理员信息' bordered>
      <Descriptions.Item label='昵称'>{name}</Descriptions.Item>
      <Descriptions.Item label='邮件'>{email}</Descriptions.Item>
      <Descriptions.Item label='角色'>管理员</Descriptions.Item>
    </Descriptions>
  );
  return (
    <Layout title='管理员 Dashboard' subtitle=''>
      <Row>
        <Col span='4'>
          <AdminLinks />
        </Col>
        <Col span='20'>{adminInfo()}</Col>
      </Row>
    </Layout>
  );
};

export default AdminDashboard;
