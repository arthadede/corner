import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 4,
    marginRight: 4
  },
  colorPrimary: {
    color: 'rgba(7, 103, 219, 1)',
    '&:hover': {
      backgroundColor: 'rgba(7, 103, 219, 0.08)'
    }
  },
  colorSuccess: {
    color: 'rgba(92, 179, 96, 1)',
    '&:hover': {
      backgroundColor: 'rgba(92, 179, 96, 0.08)'
    }
  },
  colorWarning: {
    color: 'rgba(254, 161, 33, 1)',
    '&:hover': {
      backgroundColor: 'rgba(254, 161, 33, 0.08)'
    }
  },
  colorDanger: {
    color: 'rgba(255, 0, 0, 1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.08)'
    }
  },
  colorDefault: {
    color: 'rgba(102, 120, 138, 1)',
    '&:hover': {
      backgroundColor: 'rgba(102, 120, 138, 0.08)'
    }
  }
}));

const CustomizedIconButton = props => {
  const classes = useStyles();
  const { children, size, color, ...rest } = props;

  return (
    <IconButton
      size={size}
      className={clsx(classes.root, {
        [classes.colorPrimary]: color === 'primary',
        [classes.colorSuccess]: color === 'success',
        [classes.colorWarning]: color === 'warning',
        [classes.colorDanger]: color === 'danger',
        [classes.colorDefault]: color === 'default'
      })}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

CustomizedIconButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string
};

export default CustomizedIconButton;
