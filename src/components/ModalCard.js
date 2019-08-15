import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/styles/withStyles';

export default withStyles(theme => ({
  root: {
    minHeight: 400,
    minWidth: 600,
    display: 'flex',
    flexDirection: 'column'
  }
}))(Paper);
