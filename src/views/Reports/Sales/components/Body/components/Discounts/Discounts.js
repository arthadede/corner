import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const Discounts = props => {
  const columns = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'amount',
      title: 'Amount',
      render: text => formatCurrency(text.amount)
    },
    {
      key: 'count',
      title: 'Count'
    },
    {
      key: 'gross_sales',
      title: 'Gross Sales',
      render: text => formatCurrency(text.gross_sales)
    },
    {
      key: 'refunded',
      title: 'Refunded',
      render: text => formatCurrency(text.refunded)
    },
    {
      key: 'net_discount',
      title: 'Net Discount',
      render: text => formatCurrency(text.net_discount)
    }
  ];

  const dataSource = [
    {
      name: 'Discount 1',
      amount: 999999999,
      count: 999,
      gross_sales: 999999999,
      refunded: 999999999,
      net_discount: 999999999
    },
    {
      name: 'Discount 2',
      amount: 999999999,
      count: 999,
      gross_sales: 999999999,
      refunded: 999999999,
      net_discount: 999999999
    },
    {
      name: 'Discount 3',
      amount: 999999999,
      count: 999,
      gross_sales: 999999999,
      refunded: 999999999,
      net_discount: 999999999
    }
  ];

  const tableFooter = (
    <TableRow>
      <TableCell colSpan="1">Total</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">999</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
    </TableRow>
  );

  return (
    <Table columns={columns} dataSource={dataSource} footer={tableFooter} />
  );
};

Discounts.propTypes = {};

export default Discounts;
