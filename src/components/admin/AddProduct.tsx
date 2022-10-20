import {Form, Upload, Button, Input, Select, message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../core/Layout';
import {getCategory} from '../../store/actions/category.actions';
import {CategoryState} from '../../store/reducers/category.reducer';
import {AppState} from '../../store/reducers';
import {RcFile} from 'antd/lib/upload';
import axios from 'axios';
import {isAuth} from '../../helpers/auth';
import {Jwt} from '../../store/models/auth';
import {API} from '../../config';
const {Option} = Select;

const AddProduct = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [file, setFile] = useState<RcFile>();
  const category = useSelector<AppState, CategoryState>(state => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const {user, token} = isAuth() as Jwt;

  const onFinish = (product: any) => {
    const formData = new FormData();
    for (let attr in product) {
      formData.set(attr, product[attr]);
    }
    if (typeof file !== 'undefined') {
      formData.set('photo', file);
    }
    axios
      .post(`${API}/product/create/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(
        () => {
          message.success('商品添加成功');
          form.resetFields();
        },
        () => {
          message.success('商品添加失败');
        }
      );
  };

  const addProductForm = () => {
    const props = {
      accept: 'image/*',
      beforeUpload: (file: RcFile) => {
        // 阻止默认上传行为
        setFile(file);
        return false;
      }
    };
    return (
      <Form form={form} initialValues={{category: ''}} onFinish={onFinish}>
        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>商品封面</Button>
          </Upload>
        </Form.Item>
        <Form.Item name='name' label='商品名称'>
          <Input />
        </Form.Item>
        <Form.Item name='description' label='商品描述'>
          <Input />
        </Form.Item>
        <Form.Item name='price' label='商品价格'>
          <Input />
        </Form.Item>
        <Form.Item name='category' label='商品分类'>
          <Select>
            <Option value=''>请选择分类</Option>
            {category.category.result.map(item => (
              <Option value={item._id} key={item._id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name='quantity' label='商品数量'>
          <Input />
        </Form.Item>
        <Form.Item name='shipping' label='是否需要运输'>
          <Select>
            <Option value='1'>是</Option>
            <Option value='0'>否</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            添加商品
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Layout title='添加商品' subtitle=''>
      {addProductForm()}
    </Layout>
  );
};

export default AddProduct;
