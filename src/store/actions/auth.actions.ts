export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const RESET_SIGNUP = 'RESET_SIGNUP';

export interface SignupPayload {
  email: string;
  name: string;
  password: string;
}

export interface SignupAction {
  type: typeof SIGNUP;
  payload: SignupPayload;
}

export interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}
export interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  message: string;
}
export interface ResetSignupAction {
  type: typeof RESET_SIGNUP;
}

// 注册的 action
export const signup = (payload: SignupPayload): SignupAction => ({
  type: SIGNUP,
  payload
});
export const signupSuccess = (): SignupSuccessAction => ({
  type: SIGNUP_SUCCESS
});
export const signupFail = (message: string): SignupFailAction => ({
  type: SIGNUP_FAIL,
  message
});
// 重置 注册表单
export const resetSignup = (): ResetSignupAction => ({
  type: RESET_SIGNUP
});

/* 登录部分 */
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';

export interface SigninPayload {
  email: string;
  password: string;
}
export interface SigninAction {
  type: typeof SIGNIN;
  payload: SigninPayload;
}
export interface SigninSuccessAction {
  type: typeof SIGNIN_SUCCESS;
}
export interface SigninFailAction {
  type: typeof SIGNIN_FAIL;
  message: string;
}
export const signin = (payload: SigninPayload): SigninAction => ({
  type: SIGNIN,
  payload // 登录信息
});
export const signinSuccess = (): SigninSuccessAction => ({
  type: SIGNIN_SUCCESS
});
export const signinFail = (message: string): SigninFailAction => ({
  type: SIGNIN_FAIL,
  message
});
/* 联合类型 */
export type AuthUnionType =
  | SignupAction
  | SignupSuccessAction
  | SignupFailAction
  | ResetSignupAction
  | SigninAction
  | SigninSuccessAction
  | SigninFailAction;
