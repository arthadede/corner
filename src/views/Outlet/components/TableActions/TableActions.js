import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SearchInput from '../../../../components/SearchInput';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '&>*:not(:last-child)': {
        marginBottom: 24
      }
    }
  },
  inputSearch: {
    flexGrow: 1
  }
}));

const TableActions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inputSearch}>
        <SearchInput placeholder="Search" />
      </div>
      <div>
        <Button color="primary" variant="contained">
          CREATE OUTLET
        </Button>
      </div>
    </div>
  );
};

TableActions.propTypes = {};

export default TableActions;
