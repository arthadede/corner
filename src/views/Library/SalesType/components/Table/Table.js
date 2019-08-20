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
    key: 'gratuities',
    title: 'Gratuity Applied',
    align: 'center',
    width: 200
  },
  {
    key: 'actions',
    title: '',
    align: 'center',
    width: 200,
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
  { name: 'Taxes 1', gratuities: 2 },
  { name: 'Taxes 2', gratuities: 5 },
  { name: 'Taxes 3', gratuities: 6 },
  { name: 'Taxes 4', gratuities: 3 },
  { name: 'Taxes 5', gratuities: 1 }
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
