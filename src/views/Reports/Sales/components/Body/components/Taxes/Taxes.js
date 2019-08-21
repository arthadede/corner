import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const Taxes = props => {
  const columns = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'tax_rate',
      title: 'Tax Rate'
    },
    {
      key: 'tax_amount',
      title: 'Tax Amount',
      render: text => formatCurrency(text.tax_amount)
    },
    {
      key: 'tax_collected',
      title: 'Tax Collected',
      render: text => formatCurrency(text.tax_collected)
    }
  ];

  const dataSource = [
    {
      name: 'PPN',
      tax_rate: '5%',
      tax_amount: 999999999,
      tax_collected: 999999999
    },
    {
      name: 'Liburan',
      tax_rate: '25%',
      tax_amount: 999999999,
      tax_collected: 999999999
    }
  ];

  const tableFooter = (
    <TableRow>
      <TableCell colSpan="3">Total</TableCell>
      <TableCell colSpan="1">{formatCurrency(999999999)}</TableCell>
    </TableRow>
  );

  return (
    <Table columns={columns} dataSource={dataSource} footer={tableFooter} />
  );
};

Taxes.propTypes = {};

export default Taxes;
