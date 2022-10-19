import {Jwt} from '../store/models/auth';

// 判断用户是否已登录
export function isAuth(): boolean | Jwt {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    return JSON.parse(jwt);
  }
  return false;
}
