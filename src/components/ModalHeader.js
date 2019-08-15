import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import palette from '../theme/palette';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F8FAFC',
    borderBottom: `1px solid ${palette.grey[300]}`,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    height: 68,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}));

const ModalHeader = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

ModalHeader.propTypes = {
  children: PropTypes.node
};

export default ModalHeader;
