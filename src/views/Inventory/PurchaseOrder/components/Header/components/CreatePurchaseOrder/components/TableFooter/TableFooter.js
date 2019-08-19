import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  cell: {
    ...theme.typography.h4,
    lineHeight: '64px'
  },
  alignRight: {
    textAlign: 'right'
  }
}));

const TableFooter = props => {
  const classes = useStyles();

  return (
    <TableRow className={classes.root}>
      <TableCell colspan={4} className={classes.cell}>
        Total
      </TableCell>
      <TableCell colspan={2} className={clsx(classes.cell, classes.alignRight)}>
        {new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(9999999)}
      </TableCell>
      <TableCell />
    </TableRow>
  );
};

TableFooter.propTypes = {};

export default TableFooter;
