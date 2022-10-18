import React from 'react';
import {Button, Form, Input} from 'antd';
import Layout from './Layout';
const Signup = () => {
  return (
    <Layout title="注册" subtitle="">
      <Form>
        <Form.Item label="昵称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signup;
