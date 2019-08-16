import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import CustomizedTable from '../../../../../components/CustomizedTable';
import CustomizedIconButton from '../../../../../components/CustomizedIconButton';

const columns = [
  {
    key: 'name',
    title: 'Name'
  },
  {
    key: 'privilages',
    title: 'Privilages',
    align: 'center'
  },
  {
    key: 'used',
    title: 'Used',
    align: 'center'
  },
  {
    key: 'action',
    title: 'Actions',
    align: 'center',
    width: 160,
    // eslint-disable-next-line react/display-name
    render: () => (
      <div>
        <CustomizedIconButton size="small" color="warning">
          <EditIcon />
        </CustomizedIconButton>
        <CustomizedIconButton size="small" color="danger">
          <DeleteIcon />
        </CustomizedIconButton>
      </div>
    )
  }
];

const dataSource = [
  {
    name: 'Administrator',
    privilages: 21,
    used: 3
  },
  {
    name: 'Cashier',
    privilages: 5,
    used: 6
  },
  {
    name: 'Moderator',
    privilages: 21,
    used: 1
  }
];

const TableEmployeeRole = props => {
  return (
    <CustomizedTable columns={columns} dataSource={dataSource} pagination />
  );
};

TableEmployeeRole.propTypes = {};

export default TableEmployeeRole;
