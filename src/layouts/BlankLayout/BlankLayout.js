import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'inherit'
  }
}));

const BlankLayout = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

BlankLayout.displayName = 'Blank-Layout';
BlankLayout.propTypes = {
  children: PropTypes.node
};

export default BlankLayout;
