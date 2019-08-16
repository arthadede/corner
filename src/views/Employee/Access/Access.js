import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { TableEmployeeRole, FormPrivilege } from './components';

const Access = props => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <TableEmployeeRole />
      </Grid>
      <Grid item md={6} xs={12}>
        <FormPrivilege />
      </Grid>
    </Grid>
  );
};

Access.propTypes = {};

export default Access;
