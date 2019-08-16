import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 51,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 0,
    marginRight: 0,
    borderRadius: '4px',
    padding: '0 16px'
  },
  label: {
    flexGrow: 1,
    marginLeft: 12,
    userSelect: 'none'
  },
  bordered: {
    border: '1px solid rgba(0, 0, 0, 0.23)'
  },
  reversed: {
    flexDirection: 'row-reverse'
  }
});

const FormControlSwitch = props => {
  const classes = useStyles();
  const { className, bordered, reversed, ...rest } = props;
  return (
    <FormControlLabel
      className={clsx(className, {
        [classes.bordered]: bordered,
        [classes.reversed]: reversed
      })}
      classes={{
        root: classes.root,
        label: classes.label
      }}
      {...rest}
    />
  );
};

FormControlSwitch.defaultProps = {
  bordered: true
};

FormControlSwitch.propTypes = {
  className: PropTypes.string,
  bordered: PropTypes.bool,
  reversed: PropTypes.bool
};

export default FormControlSwitch;
