import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Table from '../../../../../components/CustomizedTable';
import LabelText from '../../../../../components/LabelText';

const Body = props => {
  const columns = [
    {
      key: 'created_at',
      title: 'Date',
      sorting: true,
      render: text => moment(text.created_at).format('H:mm A')
    },
    {
      key: 'supplier',
      title: 'Supplier',
      align: 'center'
    },
    {
      key: 'order_no',
      title: 'Order No',
      align: 'center'
    },
    {
      key: 'amount',
      title: 'Total',
      align: 'center',
      render: text => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount);
      }
    },
    {
      key: 'status',
      title: 'Status',
      align: 'center',
      render: text => <LabelText>{text.status}</LabelText>
    }
  ];

  const dataSource = [
    {
      created_at: 1566199678696,
      supplier: 'Supplier 1',
      order_no: '#AAAAA',
      amount: 999999999,
      status: 'CREATED'
    },
    {
      created_at: 1547827200000,
      supplier: 'Supplier 2',
      order_no: '#AAAAA',
      amount: 999999999,
      status: 'FULLFILLED'
    },
    {
      created_at: 1566199678696,
      supplier: 'Supplier 3',
      order_no: '#AAAAA',
      amount: 999999999,
      status: 'CREATED'
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowsOnClick={(event, data) => {
          console.log(data);
        }}
        rootOrder={{
          key: 'created_at',
          type: 'date/day'
        }}
        optionSortedCell={text =>
          moment(text, 'DD/MM/YYYY').format('dddd, D MMMM YYYY')
        }
        rowsPerPageOptions={[10, 25]}
        pagination
      />
    </div>
  );
};

Body.propTypes = {};

export default Body;
