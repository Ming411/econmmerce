import {Input, Form, Button, message} from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {API} from '../../config';
import {isAuth} from '../../helpers/auth';
import {Jwt} from '../../store/models/auth';
import Layout from '../core/Layout';

const AddCategory = () => {
  const [name, setName] = useState<string>('');

  const {user, token} = isAuth() as Jwt;

  useEffect(() => {
    async function addCategory() {
      try {
        let response = await axios.post<{name: string}>(
          `${API}/category/create/${user._id}`,
          {
            name: name
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        message.success(`${response.data.name} 分类添加成功`);
      } catch (error: any) {
        message.error(`${error.response.data.error}`);
      }
    }
    if (name) {
      addCategory();
    }
  }, [name, token, user._id]);

  const onFinish = (value: {name: string}) => {
    // console.log(value);
    setName(value.name);
  };
  return (
    <Layout title='添加分类' subtitle=''>
      <Form onFinish={onFinish}>
        <Form.Item name='name' label='分类名称'>
          <Input />
        </Form.Item>
        <Form.Item name='name'>
          <Button type='primary' htmlType='submit'>
            添加分类
          </Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to='/admin/dashboard'>返回Dashboard</Link>
      </Button>
    </Layout>
  );
};

export default AddCategory;
