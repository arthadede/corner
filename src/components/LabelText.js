import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import { red, green, yellow, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    display: 'inline',
    padding: '5px 10px',
    fontSize: '10px',
    fontWeight: 500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4
  },
  colorSuccess: {
    color: 'rgba(92, 179, 96, 1)',
    borderColor: 'rgba(92, 179, 96, 1)'
  },
  colorWarining: {
    color: 'rgba(254, 161, 33, 1)',
    borderColor: 'rgba(254, 161, 33, 1)'
  },
  colorDanger: {
    color: 'rgba(255, 0, 0, 1)',
    borderColor: 'rgba(255, 0, 0, 1)'
  },
  colorDefault: {
    color: 'rgba(102, 120, 138, 1)',
    borderColor: 'rgba(102, 120, 138, 1)'
  }
});

const LabelText = ({ children, color }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, {
        [classes.colorSuccess]: color === 'success',
        [classes.colorWarining]: color === 'warning',
        [classes.colorDanger]: color === 'danger',
        [classes.colorDefault]: color === 'default'
      })}
    >
      {children}
    </div>
  );
};

LabelText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

LabelText.defaultProps = {
  color: 'default'
};

export default LabelText;
