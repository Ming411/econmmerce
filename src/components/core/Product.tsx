import {Col, Row} from 'antd';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductById} from '../../store/actions/product.actions';
import {AppState} from '../../store/reducers';
import {ProductState} from '../../store/reducers/product.reducer';
import Layout from './Layout';
import ProductItem from './ProductItem';

const Product = () => {
  const dispatch = useDispatch();
  const {productId} = useParams<{productId: string}>();
  const {product} = useSelector<AppState, ProductState>(state => state.product);
  useEffect(() => {
    dispatch(getProductById({productId}));
  }, [dispatch, productId]);

  return (
    <Layout title='商品名称' subtitle='商品描述'>
      <Row gutter={36}>
        <Col span='18'>
          <ProductItem showViewProduct={false} product={product.result} />
        </Col>
        <Col span='6'>2</Col>
      </Row>
    </Layout>
  );
};

export default Product;
