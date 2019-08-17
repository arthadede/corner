import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchInput from '../../../../components/SearchInput';

const Actions = props => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={12}>
        <SearchInput placeholder="Search" />
      </Grid>
      <Grid item md={8} xs={12} align="right">
        <Button variant="outlined" color="primary">
          EXPORT CSV
        </Button>
      </Grid>
    </Grid>
  );
};

Actions.propTypes = {};

export default Actions;
