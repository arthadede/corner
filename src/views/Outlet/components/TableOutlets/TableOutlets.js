import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import CustomizedTable from '../../../../components/CustomizedTable';
import CustomizedIconButton from '../../../../components/CustomizedIconButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import LabelText from '../../../../components/LabelText';

const useStyles = makeStyles({});

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
    title: 'Item Type',
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
    render: text => <LabelText color="success">DISABLED</LabelText>
  },
  {
    key: 'action',
    title: '',
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
