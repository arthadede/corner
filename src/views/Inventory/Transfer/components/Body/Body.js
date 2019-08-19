import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Table from '../../../../../components/CustomizedTable';

const Body = props => {
  const columns = [
    {
      key: 'created_at',
      title: 'Date',
      sorting: true,
      render: text => moment(text.created_at).format('H:mm A')
    },
    {
      key: 'from',
      title: 'From Outlet',
      align: 'center'
    },
    {
      key: 'to',
      title: 'To Outlet',
      align: 'center'
    },
    {
      key: 'notes',
      title: 'Note',
      width: 200
    },
    {
      key: 'items',
      title: 'Items',
      align: 'center'
    },
    {
      key: 'qty',
      title: 'Qty',
      align: 'center'
    }
  ];

  const dataSource = [
    {
      created_at: 1566199678696,
      from: 'Outlet 1',
      to: 'Outlet 2',
      notes: 'PINDAH BARANG',
      items: 'BARANG 1',
      qty: 23
    },
    {
      created_at: 1566199678696,
      from: 'Outlet 2',
      to: 'Outlet 1',
      notes: 'PINDAH BARANG',
      items: 'BARANG 2',
      qty: 23
    },
    {
      created_at: 1566199678696,
      from: 'Outlet 1',
      to: 'Outlet 2',
      notes: 'PINDAH BARANG',
      items: 'BARANG 3',
      qty: 23
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
