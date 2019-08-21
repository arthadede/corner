import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const CollectedBy = props => {
  const columns = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'role',
      title: 'Role'
    },
    {
      key: 'transactions',
      title: 'Transactions'
    },
    {
      key: 'amount',
      title: 'Collected',
      render: text => formatCurrency(text.amount)
    }
  ];

  const dataSource = [
    {
      name: 'Admin',
      role: 'Administrator',
      transactions: 999,
      amount: 999999999
    },
    {
      name: 'Moderator',
      role: 'Moderator',
      transactions: 999,
      amount: 999999999
    },
    {
      name: 'Cashier',
      role: 'Cashier',
      transactions: 999,
      amount: 999999999
    }
  ];

  const tableFooter = (
    <TableRow>
      <TableCell colSpan="2">Total</TableCell>
      <TableCell colSpan="1">999</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
    </TableRow>
  );

  return (
    <Table columns={columns} dataSource={dataSource} footer={tableFooter} />
  );
};

CollectedBy.propTypes = {};

export default CollectedBy;
