import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { SalesSummary, ItemSummary } from './components';

const Dashboard = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SalesSummary />
      </Grid>
      <Grid item xs={12}>
        <ItemSummary />
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
