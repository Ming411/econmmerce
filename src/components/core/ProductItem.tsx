import React, {FC} from 'react';
import {Button, Card, Col, Image, Row, Typography} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {Product} from '../../store/models/product';
import {API} from '../../config';
import moment from 'moment';
import {addItem} from '../../helpers/cart';
const {Title, Paragraph} = Typography;
// ts中必须指定props中有那些属性
interface Props {
  product: Product;
  showViewProduct?: boolean;
  showCartBtn?: boolean;
}
const ProductItem: FC<Props> = ({product, showViewProduct = true, showCartBtn = true}) => {
  const navigate = useNavigate();
  //  加入购物车
  const addToCart = () => {
    addItem(product, () => {
      navigate('/cart');
    });
  };

  const showButtons = () => {
    let buttonArray = [];
    if (showViewProduct) {
      buttonArray.push(
        <Button type='link'>
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>
      );
    }
    if (showCartBtn) {
      buttonArray.push(
        <Button type='link' onClick={addToCart}>
          加入购物车
        </Button>
      );
    }
    return buttonArray;
  };

  return (
    <Card
      cover={<Image src={`${API}/product/photo/${product._id}`} alt={product.name} />}
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{rows: 2}}>{product.description}</Paragraph>
      <Row>
        <Col span='12'>销量：{product.sold}</Col>
        <Col span='12' style={{textAlign: 'right'}}>
          价格：{product.price}
        </Col>
      </Row>
      <Row>
        <Col span='12'>上架时间：{moment(product.createdAt).format('YYYY-MM-DD')}</Col>
        <Col span='12' style={{textAlign: 'right'}}>
          所属分类：{product.category.name}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductItem;
