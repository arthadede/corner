import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const SalesType = props => {
  const columns = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'count',
      title: 'Count'
    },
    {
      key: 'amount',
      title: 'Total Collected',
      render: text => formatCurrency(text.amount)
    }
  ];

  const dataSource = [
    {
      name: 'Guest',
      count: 999,
      amount: 999999999
    },
    {
      name: 'Member',
      count: 999,
      amount: 999999999
    },
    {
      name: 'Business',
      count: 999,
      amount: 999999999
    }
  ];

  const tableFooter = (
    <TableRow>
      <TableCell colSpan="2">Total</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
    </TableRow>
  );

  return (
    <Table columns={columns} dataSource={dataSource} footer={tableFooter} />
  );
};

SalesType.propTypes = {};

export default SalesType;
