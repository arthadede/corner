import React from 'react';
import PropTypes from 'prop-types';
import EyeIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Table from '../../../../../components/CustomizedTable';
import IconButton from '../../../../../components/CustomizedIconButton';

const Body = props => {
  const columns = [
    {
      key: 'name',
      title: 'Name',
      sorting: true
    },
    {
      key: 'address',
      title: 'Address',
      align: 'center',
      sorting: true
    },
    {
      key: 'phone_number',
      title: 'Phone number',
      align: 'center'
    },
    {
      key: 'email',
      title: 'Email',
      align: 'center'
    },
    {
      key: 'actions',
      title: '',
      align: 'center',
      width: 240,
      render: text => {
        return (
          <>
            <IconButton size="small" color="warning">
              <EditIcon />
            </IconButton>
            <IconButton size="small" color="danger">
              <DeleteIcon />
            </IconButton>
          </>
        );
      }
    }
  ];

  const dataSource = [
    {
      name: 'Example 1',
      address: 'Address 1',
      phone_number: '82237045757',
      email: 'x1.artha@gmail.com'
    },
    {
      name: 'Example 2',
      address: 'Address 2',
      phone_number: '82237045757',
      email: 'x1.artha@gmail.com'
    },
    {
      name: 'Example 3',
      address: 'Address 3',
      phone_number: '82237045757',
      email: 'x1.artha@gmail.com'
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowsOnClick={(e, data) => console.log(data)}
        pagination
      />
    </div>
  );
};

Body.propTypes = {};

export default Body;
