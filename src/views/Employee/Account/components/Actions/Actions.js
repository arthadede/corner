import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import SearchInput from '../../../../../components/SearchInput';

const Actions = props => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={12}>
        <SearchInput placeholder="Search" />
      </Grid>
    </Grid>
  );
};

Actions.propTypes = {};

export default Actions;
