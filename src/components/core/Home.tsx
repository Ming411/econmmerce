import React, {useEffect} from 'react';
import {Row, Col, Typography} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import Layout from './Layout';
import Search from './Search';
import ProductItem from './ProductItem';
import {getProduct} from '../../store/actions/product.actions';
import {AppState} from '../../store/reducers';
import {ProductState} from '../../store/reducers/product.reducer';
const {Title} = Typography;
const Home = () => {
  const dispatch = useDispatch();
  const {createdAt, sold} = useSelector<AppState, ProductState>(state => state.product);
  useEffect(() => {
    // debugger;
    dispatch(getProduct('createdAt'));
    dispatch(getProduct('sold'));
  }, [dispatch]);

  return (
    <Layout title='XX商城' subtitle='尽情享受'>
      <Search />
      <Title level={5}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {createdAt.products.map(item => (
          <Col span='6' key={item._id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
      <Title level={5}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
        {sold.products.map(item => (
          <Col span='6' key={item._id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
