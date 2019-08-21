import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const Gratuity = () => {
  const columns = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'rate',
      title: 'Rate'
    },
    {
      key: 'amount',
      title: 'Collected',
      render: text => formatCurrency(text.amount)
    }
  ];

  const dataSource = [
    {
      name: 'Bangunan',
      rate: '50%',
      amount: 999999999
    },
    {
      name: 'Tanah',
      rate: '50%',
      amount: 999999999
    },
    {
      name: 'Air',
      rate: '50%',
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

export default Gratuity;
