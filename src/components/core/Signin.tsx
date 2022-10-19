import React from 'react';
import {Button, Form, Input, Result} from 'antd';
import Layout from './Layout';
import {signin, SigninPayload} from '../../store/actions/auth.actions';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AppState} from '../../store/reducers';
import {AuthState} from '../../store/reducers/auth.reducer';
import {isAuth} from '../../helpers/auth';
import {Jwt} from '../../store/models/auth';
import {Navigate} from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (value: SigninPayload) => {
    // console.log(value);
    dispatch(signin(value));
  };

  const auth = useSelector<AppState, AuthState>(state => state.auth);
  // 处理登录结果
  const redirectToDashboard = () => {
    const auth = isAuth(); // 判断本地是否有token
    if (auth) {
      const {
        user: {role}
      } = auth as Jwt; // 类型断言
      if (role === 0) {
        // 普通用户
        return <Navigate to='/user/dashboard' />;
      } else {
        // 管理员
        return <Navigate to='/admin/dashboard' />;
      }
    }
  };
  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return <Result status='warning' title='注册失败' subTitle={auth.signin.message} />;
    }
  };
  const siginForm = () => (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label='邮箱' name='email'>
        <Input autoComplete='off' />
      </Form.Item>
      <Form.Item label='密码' name='password'>
        <Input.Password autoComplete='off' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
  return (
    <Layout title='登录' subtitle=''>
      {siginForm()}
      {redirectToDashboard()}
      {showError()}
    </Layout>
  );
};

export default Signin;
