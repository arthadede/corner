import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import LabelText from '../../../../../components/LabelText';
import Table from '../../../../../components/CustomizedTable';
import IconButton from '../../../../../components/CustomizedIconButton';
import { makeStyles } from '@material-ui/core';
import { DetailEmployee } from './components';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const dataSource = [
  {
    name: 'Artha Administrator',
    role: 'Administrator',
    outlets: ['Supratman', 'Nangka'],
    createdAt: 1565982773521,
    status: 'ACTIVE'
  },
  {
    name: 'Artha Moderator',
    role: 'Moderator',
    outlets: ['Supratman'],
    createdAt: 1565983173662,
    status: 'ACTIVE'
  }
];

const TableEmployee = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'role',
      title: 'Role'
    },
    {
      key: 'outlets',
      title: 'Assigned Outlet',
      render: text => text.outlets.join(', ')
    },
    {
      key: 'createdAt',
      title: 'Created Date',
      align: 'center',
      sorting: true,
      render: text => moment(text.createdAt).fromNow()
    },
    {
      key: 'status',
      title: 'Status',
      align: 'center',
      render: text => <LabelText>{text.status}</LabelText>
    },
    {
      key: 'actions',
      title: '',
      align: 'center',
      width: 160,
      render: () => (
        <>
          <IconButton size="small" color="primary" onClick={handleOpen}>
            <RemoveRedEyeIcon />
          </IconButton>
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

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <DetailEmployee />
      </Modal>
    </div>
  );
};

TableEmployee.propTypes = {};

export default TableEmployee;
