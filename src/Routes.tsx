import React from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './router/index';

const Routes = () => {
  return <div>{useRoutes(routes)}</div>;
};

export default Routes;
