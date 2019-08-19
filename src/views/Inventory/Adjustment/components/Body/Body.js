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
      key: 'notes',
      title: 'Note'
    },
    {
      key: 'sku',
      title: 'SKU',
      align: 'center'
    },
    {
      key: 'items',
      title: 'Items',
      align: 'center'
    },
    {
      key: 'adjustment',
      title: 'Adjustment',
      align: 'center'
    }
  ];

  const dataSource = [
    {
      created_at: 1566199678696,
      notes: 'Comment 1',
      sku: '#AAAA',
      items: 'Barang 1',
      adjustment: 3
    },
    {
      created_at: 1566199678696,
      notes: 'Comment 2',
      sku: '#BBBB',
      items: 'Barang 2',
      adjustment: 4
    },
    {
      created_at: 1566199678696,
      notes: 'Comment 3',
      sku: '#CCCC',
      items: 'Barang 3',
      adjustment: 5
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
