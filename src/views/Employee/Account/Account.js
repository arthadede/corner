import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Actions, TableEmployee } from './components';

const Account = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Actions />
      </Grid>
      <Grid item xs={12}>
        <TableEmployee />
      </Grid>
    </Grid>
  );
};

Account.propTypes = {};

export default Account;
