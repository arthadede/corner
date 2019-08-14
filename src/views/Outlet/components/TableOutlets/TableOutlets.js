import React from 'react';
import PropTypes from 'prop-types';
import CustomizedTable from '../../../../components/CustomizedTable';

const columns = [
  {
    key: 'id',
    title: 'ID',
    align: 'center',
    width: 100
  },
  {
    key: 'firstname',
    title: 'Firstname',
    align: 'left'
  },
  {
    key: 'lastname',
    title: 'Lastname'
  },
  {
    key: 'fullname',
    title: 'Fullname',
    render: text => [text.firstname, text.lastname].join(' ')
  }
];

const dataSource = [
  {
    id: 1,
    firstname: 'Artha',
    lastname: 'Suryawan'
  },
  {
    id: 2,
    firstname: 'Dede',
    lastname: 'Testing'
  }
];

const TableOutlets = props => {
  return <CustomizedTable columns={columns} dataSource={dataSource} />;
};

TableOutlets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableOutlets;
