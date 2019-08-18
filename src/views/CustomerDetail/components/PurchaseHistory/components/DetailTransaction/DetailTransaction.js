import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Table from '../../../../../../components/CustomizedTable';
import BoxBordered from '../../../../../../components/BoxBordered';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 700
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const DetailTransaction = props => {
  const classes = useStyles();

  const columns = [
    {
      key: 'items',
      title: 'Items'
    },
    {
      key: 'qty',
      title: 'Qty'
    },
    {
      key: 'price',
      title: 'Price',
      render: text => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.price);
      }
    },
    {
      key: 'amount',
      title: 'Total',
      render: text => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount);
      }
    }
  ];

  const dataSource = [
    {
      items: 'Barang Example 1',
      qty: 999,
      price: 999999999,
      amount: 999999999
    },
    {
      items: 'Barang Example 2',
      qty: 999,
      price: 999999999,
      amount: 999999999
    },
    {
      items: 'Barang Example 3',
      qty: 999,
      price: 999999999,
      amount: 999999999
    }
  ];

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>
          {moment(1565982773521).format('MMMM Do YYYY, h:mm:ss a')}
        </span>
      </Box>
      <Divider />
      <Table
        columns={columns}
        dataSource={dataSource}
        rowsPerPageOptions={[5, 10]}
        pagination
      />
    </BoxBordered>
  );
};

DetailTransaction.propTypes = {};

export default DetailTransaction;
