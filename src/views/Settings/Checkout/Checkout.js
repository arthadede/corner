import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { FormTaxAndGratuity, FormRounding } from './components';

const Checkout = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xl={4} md={6} xs={12}>
        <FormTaxAndGratuity />
      </Grid>
      <Grid item xl={4} md={6} xs={12}>
        <FormRounding />
      </Grid>
    </Grid>
  );
};

Checkout.propTypes = {};

export default Checkout;
