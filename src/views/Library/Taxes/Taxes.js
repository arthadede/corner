import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Table, Form } from './components';

const Taxes = props => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Table />
      </Grid>
      <Grid item md={6} xs={12}>
        <Form />
      </Grid>
    </Grid>
  );
};

Taxes.propTypes = {};

export default Taxes;
