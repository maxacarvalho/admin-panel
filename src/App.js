import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import MomentUtils from '@date-io/moment';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import useSettings from './hooks/useSettings';
import { createTheme } from './theme/theme';
import MainLayout from './layouts/MainLayout';
import Routes from './app/Routes';
import DashboardView from './views/pages/DashboardView';
import Error404View from './views/pages/Error404View';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      width: '100%',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  },
}));

const App = () => {
  useStyles();

  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <Switch>
              <Route path="/" exact>
                <MainLayout>
                  <DashboardView />
                </MainLayout>
              </Route>
              <Route path="*">
                <Error404View />
              </Route>
            </Switch>
          </Router>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
