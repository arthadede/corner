import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { TableActions, TableOutlets } from './components';

const Outlet = props => {
  const { outlets } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TableActions />
      </Grid>
      <Grid item xs={12}>
        <TableOutlets data={outlets} />
      </Grid>
    </Grid>
  );
};

Outlet.propTypes = {
  outlets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Outlet;
