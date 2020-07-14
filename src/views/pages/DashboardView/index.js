import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Page from '../../../components/Page';

const useStyles = makeStyles(() => ({
  root: {},
}));

const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Typography variant="h1">Dashboard</Typography>
    </Page>
  );
};

export default DashboardView;
