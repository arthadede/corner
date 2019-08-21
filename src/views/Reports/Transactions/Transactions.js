import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Header, Body } from './components';

const Transactions = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Body />
      </Grid>
    </Grid>
  );
};

Transactions.propTypes = {};

export default Transactions;
