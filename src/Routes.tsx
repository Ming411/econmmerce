import React, {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './router/index';

const Routes = () => {
  // return <div>{useRoutes(routes)}</div>;
  return <Suspense fallback={<div></div>}>{useRoutes(routes)}</Suspense>;
};

export default Routes;
