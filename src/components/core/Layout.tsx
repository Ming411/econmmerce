import React, {FC} from 'react';
import {PageHeader} from 'antd';
import Navigation from './Navigation';

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
// children 就是标签中的全部内容
const Layout: FC<Props> = ({children, title, subtitle}) => {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={title} subTitle={subtitle} />
      <div style={{width: '85%', margin: '0 auto'}}>{children}</div>
    </div>
  );
};

export default Layout;
