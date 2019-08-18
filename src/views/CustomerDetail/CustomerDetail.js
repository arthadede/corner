import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { CustomerInfo, CustomerHighlight, PurchaseHistory } from './components';

const CustomerDetail = props => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <CustomerInfo />
      </Grid>
      <Grid item md={6}>
        <CustomerHighlight />
      </Grid>
      <Grid item md={12}>
        <PurchaseHistory />
      </Grid>
    </Grid>
  );
};

CustomerDetail.propTypes = {};

export default CustomerDetail;
