import React from 'react';
import {Button, Form, Input} from 'antd';
import Layout from './Layout';

const Signin = () => {
  return (
    <Layout title="登录" subtitle="">
      <Form>
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signin;
