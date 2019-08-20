import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Table from '../../../../../components/CustomizedTable';
import IconButton from '../../../../../components/CustomizedIconButton';

const columns = [
  {
    key: 'name',
    title: 'Name'
  },
  {
    key: 'amount',
    title: 'Amount'
  },
  {
    key: 'actions',
    title: '',
    align: 'center',
    width: 120,
    render: text => (
      <>
        <IconButton size="small" color="warning">
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="danger">
          <DeleteIcon />
        </IconButton>
      </>
    )
  }
];

const dataSource = [
  { name: 'Taxes 1', amount: '5%' },
  { name: 'Taxes 2', amount: '5%' },
  { name: 'Taxes 3', amount: '5%' },
  { name: 'Taxes 4', amount: '5%' },
  { name: 'Taxes 5', amount: '5%' }
];

const TableCategories = props => (
  <Table
    columns={columns}
    dataSource={dataSource}
    rowsPerPageOptions={[10, 25]}
    pagination
  />
);

TableCategories.propTypes = {};

export default TableCategories;
