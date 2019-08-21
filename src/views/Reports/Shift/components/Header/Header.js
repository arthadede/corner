import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchInput from '../../../../../components/SearchInput';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 8,
    marginRight: 8
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" spacing={3}>
        <Grid item md={4} xs={12}>
          <SearchInput placeholder="Date Picker" />
        </Grid>
        <Grid item md={8} xs={12} align="right">
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
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
