/* eslint-disable react/jsx-props-no-spreading,react/no-array-index-key */
import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardView from '../views/pages/DashboardView';
import LoadingScreen from '../components/LoadingScreen';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/dashboard" />,
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('../views/pages/Error404View')),
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/dashboard',
        component: DashboardView,
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        // const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes
                  ? renderRoutes(route.routes)
                  : <Component {...props} />}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
