import {Select, Form, Input, Button, Divider, Row, Col} from 'antd';
import Item from 'antd/lib/list/Item';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory} from '../../store/actions/category.actions';
import {searchProduct} from '../../store/actions/product.actions';
import {AppState} from '../../store/reducers';
import {CategoryState} from '../../store/reducers/category.reducer';
import ProductItem from './ProductItem';
const {Option} = Select;
const Search = () => {
  const dispatch = useDispatch();

  const {category} = useSelector<AppState, CategoryState>(state => state.category);
  // 防止刷新页面数据丢失，所以要重新获取
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const onFinish = (value: {category: string; search: string}) => {
    dispatch(searchProduct({category: value.category, search: value.search}));
  };

  return (
    <>
      <Form onFinish={onFinish} layout='inline' initialValues={{category: 'All'}}>
        <Input.Group compact>
          <Form.Item name='category'>
            <Select>
              <Option value='All'>所有分类</Option>
              {category.result.map(item => (
                <Option key={item._id} value={item._id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='search'>
            <Input placeholder='请输入搜索关键字' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              搜索
            </Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span='6'>{/* <ProductItem /> */}</Col>
      </Row>
    </>
  );
};

export default Search;
