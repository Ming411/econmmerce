import React, {useEffect} from 'react';
import {Button, Form, Input, Result} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import Layout from './Layout';
import {resetSignup, signup, SignupPayload} from '../../store/actions/auth.actions';
import {AppState} from '../../store/reducers';
import {AuthState} from '../../store/reducers/auth.reducer';
import {Link} from 'react-router-dom';
const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector<AppState, AuthState>(state => state.auth);
  const [form] = Form.useForm(); // 获取表单实例对象,并绑定form组件

  /* 发送注册请求 */
  const onFinish = (value: SignupPayload) => {
    // console.log(value);
    dispatch(signup(value));
  };
  // 注册成功清空表单
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields();
    }
  }, [auth, form]);
  // 成功 显示注册成功提示信息
  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={
            <Button type="primary">
              <Link to="/signin">登录</Link>
            </Button>
          }
        />
      );
    }
  };
  // 失败 显示注册失败提示信息
  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return <Result status="warning" title="注册失败" subTitle={auth.signup.message} />;
    }
  };
  // 离开页面重置状态
  useEffect(() => {
    return () => {
      // 组件卸载后重置表单
      dispatch(resetSignup());
    };
  }, []);

  const signupForm = () => (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="昵称" name="name">
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item label="邮箱" name="email">
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item label="密码" name="password">
        <Input.Password autoComplete="off" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Layout title="注册" subtitle="">
      {/* 成功 */}
      {showSuccess()}
      {/* 失败 */}
      {showError()}
      {/* 注册表单 */}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
