import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchInput from '../../../../../components/SearchInput';

const Header = props => {
  return (
    <div>
      <Grid container alignItems="center" spacing={3}>
        <Grid item md={4} xs={12}>
          <SearchInput placeholder="Search" />
        </Grid>
        <Grid item md={4} xs={12}>
          DatePicker
        </Grid>
        <Grid item md={4} xs={12} align="right">
          <Button
            color="primary"
            variant="outlined"
            onClick={() => console.log('EXPORT')}
          >
            EXPORT CSV
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {};

export default Header;
