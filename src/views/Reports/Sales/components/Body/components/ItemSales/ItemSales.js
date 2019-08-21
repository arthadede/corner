import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const ItemSales = props => {
  const columns = [
    {
      key: 'sku',
      title: 'SKU'
    },
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'category',
      title: 'Category'
    },
    {
      key: 'sold_out',
      title: 'Sold Out'
    },
    {
      key: 'refunded',
      title: 'Refunded'
    },
    {
      key: 'gross_sales',
      title: 'Gross Sales',
      render: text => formatCurrency(text.gross_sales)
    },
    {
      key: 'amount_discount',
      title: 'Discount',
      render: text => formatCurrency(text.amount_discount)
    },
    {
      key: 'amount_refunded',
      title: 'Refund',
      render: text => formatCurrency(text.amount_refunded)
    },
    {
      key: 'net_sales',
      title: 'Net Sales',
      render: text => formatCurrency(text.net_sales)
    },
    {
      key: 'gross_profit',
      title: 'Gross Profit',
      render: text => formatCurrency(text.gross_profit)
    },
    {
      key: 'gross_margin',
      title: 'Gross Margin'
    }
  ];

  const dataSource = [
    {
      sku: '#AAAA',
      name: 'Barang 1',
      category: 'Category 1',
      sold_out: 999,
      refunded: 999,
      gross_sales: 999999999,
      amount_discount: 999999999,
      amount_refunded: 999999999,
      net_sales: 999999999,
      gross_profit: 999999999,
      gross_margin: '50%'
    },
    {
      sku: '#BBBB',
      name: 'Barang 2',
      category: 'Category 2',
      sold_out: 999,
      refunded: 999,
      gross_sales: 999999999,
      amount_discount: 999999999,
      amount_refunded: 999999999,
      net_sales: 999999999,
      gross_profit: 999999999,
      gross_margin: '50%'
    },
    {
      sku: '#CCCC',
      name: 'Barang 3',
      category: 'Category 3',
      sold_out: 999,
      refunded: 999,
      gross_sales: 999999999,
      amount_discount: 999999999,
      amount_refunded: 999999999,
      net_sales: 999999999,
      gross_profit: 999999999,
      gross_margin: '50%'
    }
  ];

  const tableFooter = (
    <TableRow>
      <TableCell colSpan="3">Total</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">100%</TableCell>
    </TableRow>
  );

  return (
    <Table columns={columns} dataSource={dataSource} footer={tableFooter} />
  );
};

ItemSales.propTypes = {};

export default ItemSales;
