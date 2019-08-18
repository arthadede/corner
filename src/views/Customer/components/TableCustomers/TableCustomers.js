import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import LabelText from '../../../../components/LabelText';
import Table from '../../../../components/CustomizedTable';
import IconButton from '../../../../components/CustomizedIconButton';
import { makeStyles } from '@material-ui/core';

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
    name: 'I Gede Bagus Artha Suryawan',
    register_date: 1565982773521,
    amount_by_month: 999999999,
    amount_by_year: 999999999,
    amount_all: 999999999
  },
  {
    name: 'Example User',
    register_date: 1565982773521,
    amount_by_month: 999999999,
    amount_by_year: 999999999,
    amount_all: 999999999
  },
  {
    name: 'Artha Suryawan',
    register_date: 1565982773521,
    amount_by_month: 999999999,
    amount_by_year: 999999999,
    amount_all: 999999999
  }
];

const TableCustomers = props => {
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
      key: 'register_date',
      title: 'Customer Since',
      sorting: true,
      render: text => moment(text.register_date).fromNow()
    },
    {
      key: 'amount_by_month',
      title: 'This Mount',
      align: 'center',
      sorting: true,
      render: text =>
        new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount_by_month)
    },
    {
      key: 'amount_by_year',
      title: 'This Year',
      align: 'center',
      sorting: true,
      render: text =>
        new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount_by_year)
    },
    {
      key: 'amount_all',
      title: 'Lifetime',
      align: 'center',
      sorting: true,
      render: text =>
        new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount_all)
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
        </>
      )
    }
  ];

  return <Table columns={columns} dataSource={dataSource} pagination />;
};

TableCustomers.propTypes = {};

export default TableCustomers;
