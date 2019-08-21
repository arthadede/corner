import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import BoxBordered from '../../../../components/BoxBordered';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(3)
  },
  label: {
    marginBottom: theme.spacing(1)
  }
}));

const LabelBox = props => {
  const classes = useStyles();
  const { label, value, children } = props;

  return (
    <BoxBordered className={classes.root}>
      <Typography variant="body2" className={classes.label}>
        {label}
      </Typography>
      {value && <Typography variant="h4">{value}</Typography>}
      {children}
    </BoxBordered>
  );
};

LabelBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node
};

export default LabelBox;
