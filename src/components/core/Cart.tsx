import {Col, Divider, Input, Row} from 'antd';
import React, {useState, useEffect, ChangeEvent} from 'react';
import {CartItem, getCart} from '../../helpers/cart';
import CartItemFc from './CartItemFc';
import Layout from './Layout';
import Pay from './Pay';
import TotalPrice from './TotalPrice';

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [address, setAddress] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    setCart(getCart());
  }, []);
  const showCart = () => (
    <table style={{width: '100%'}}>
      <thead className='ant-table-thead'>
        <tr>
          <th className='ant-table-cell'>商品封面</th>
          <th className='ant-table-cell'>商品名称</th>
          <th className='ant-table-cell'>商品价格</th>
          <th className='ant-table-cell'>商品分类</th>
          <th className='ant-table-cell'>商品数量</th>
          <th className='ant-table-cell'>操作</th>
        </tr>
      </thead>
      <tbody className='ant-table-tbody'>
        {cart.map(item => (
          <CartItemFc product={item} setCart={setCart} key={item._id} />
        ))}
      </tbody>
    </table>
  );
  return (
    <Layout title='购物车' subtitle='快付款吧！'>
      <Row gutter={16}>
        <Col span='16'>{showCart()}</Col>
        <Col span='8'>
          <Row>
            <Input
              value={address}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)}
              placeholder='请输入收货地址'
            />
          </Row>
          <Divider />
          <Row>
            <TotalPrice cart={cart} setTotalPrice={setTotalPrice} />
          </Row>
          <Row>
            <Pay totalPrice={totalPrice} cart={cart} address={address} />
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Cart;