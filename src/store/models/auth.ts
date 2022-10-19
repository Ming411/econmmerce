// 这个问渐渐专门用于定义数据类型相关

export interface User {
  _id: string;
  name: string;
  email: string;
  role: number;
}

export interface Jwt {
  token: string;
  user: User;
}
