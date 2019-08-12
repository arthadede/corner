import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { CardProfile, FormProfile, FormChangePassword } from './components';

const useStyles = makeStyles(theme => ({
  profileAvatar: {
    width: 100,
    height: 100
  },
  boxHeaderTitle: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  boxHeaderSubtitle: {
    display: 'inline-flex',
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }
}));

const Dashboard = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xs={12}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <CardProfile />
          </Grid>
          <Grid item>
            <FormProfile />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8} md={6} xs={12}>
        <FormChangePassword />
      </Grid>
    </Grid>
  );
};

Dashboard.displayName = 'Dashboard Page';

export default Dashboard;
