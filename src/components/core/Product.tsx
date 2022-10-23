import {Col, Row} from 'antd';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductById} from '../../store/actions/product.actions';
import Layout from './Layout';

const Product = () => {
  const dispatch = useDispatch();
  const {productId} = useParams<{productId: string}>();
  // console.log(productId);
  useEffect(() => {
    dispatch(getProductById({productId}));
  }, [dispatch, productId]);

  return (
    <Layout title="商品名称" subtitle="商品描述">
      <Row gutter={36}>
        <Col span="18">1</Col>
        <Col span="6">2</Col>
      </Row>
    </Layout>
  );
};

export default Product;
