import React from 'react';
import PropTypes from 'prop-types';
import CustomizedTable from '../../../../components/CustomizedTable';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';

const columns = [
  {
    key: 'id',
    title: 'ID',
    align: 'center',
    width: 100,
    sorting: true,
    sorted: 'asc'
  },
  {
    key: 'firstname',
    title: 'Firstname',
    align: 'left',
    sorting: true
  },
  {
    key: 'lastname',
    title: 'Lastname'
  },
  {
    key: 'fullname',
    title: 'Fullname',
    render: text => [text.firstname, text.lastname].join(' ')
  },
  {
    key: 'action',
    title: 'Action',
    width: 160,
    render: () => (
      <IconButton size="small">
        <AddIcon />
      </IconButton>
    )
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
  },
  {
    id: 3,
    firstname: 'Artha',
    lastname: 'Suryawan'
  },
  {
    id: 4,
    firstname: 'Dede',
    lastname: 'Testing'
  },
  {
    id: 5,
    firstname: 'Artha',
    lastname: 'Suryawan'
  }
];

const requestData = [
  {
    id: 6,
    firstname: 'Artha',
    lastname: 'Suryawan'
  },
  {
    id: 7,
    firstname: 'Dede',
    lastname: 'Testing'
  },
  {
    id: 8,
    firstname: 'Artha',
    lastname: 'Suryawan'
  },
  {
    id: 9,
    firstname: 'Dede',
    lastname: 'Testing'
  },
  {
    id: 10,
    firstname: 'Artha',
    lastname: 'Suryawan'
  }
];

const FooterCustom = (
  <TableRow>
    <TableCell>Field 1</TableCell>
    <TableCell>Field 2</TableCell>
    <TableCell>Field 3</TableCell>
    <TableCell>Field 4</TableCell>
  </TableRow>
);

const TableOutlets = props => {
  const [sources, setSources] = React.useState(dataSource);

  const handleRequestSort = () => setSources(requestData);
  const handleRequestPage = page => console.log(page);
  const handleRequestRowPerPage = rowPerPage => console.log(rowPerPage);
  return (
    <CustomizedTable
      // count={10}
      columns={columns}
      dataSource={sources}
      // onRequestSort={handleRequestSort}
      // onRequestPage={handleRequestPage}
      // onRequestRowPerPage={handleRequestRowPerPage}
      // footer={FooterCustom}
      pagination
    />
  );
};

TableOutlets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableOutlets;
