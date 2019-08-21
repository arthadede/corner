import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import BoxBordered from '../../../../../../../components/BoxBordered';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';
import { makeStyles } from '@material-ui/styles';
import { TableFooter } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: 900
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
      key: 'sku',
      title: 'SKU',
      width: 200
    },
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'qty',
      title: 'Qty',
      align: 'center'
    },
    {
      key: 'price',
      title: 'Price',
      align: 'center',
      render: text => formatCurrency(text.price)
    },
    {
      key: 'amount',
      title: 'Total',
      align: 'center',
      render: text => formatCurrency(text.price)
    }
  ];

  const dataSource = [
    {
      sku: 'AAAA',
      name: 'Barang 1',
      qty: 12,
      price: 999999999,
      amount: 999999999
    }
  ];

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>#AAAAAAA</span>
      </Box>
      <Divider />
      <Table
        columns={columns}
        dataSource={dataSource}
        footer={<TableFooter />}
      />
    </BoxBordered>
  );
};

DetailTransaction.propTypes = {};

export default DetailTransaction;
