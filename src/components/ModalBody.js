import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    flexGrow: 1
  }
}));

const ModalBody = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

ModalBody.propTypes = {
  children: PropTypes.node
};

export default ModalBody;
