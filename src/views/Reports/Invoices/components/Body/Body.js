import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Table from '../../../../../components/CustomizedTable';
import LabelText from '../../../../../components/LabelText';
import { makeStyles } from '@material-ui/styles';
import { DetailInvoice } from './components';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Body = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      key: 'created_at',
      title: 'Date',
      sorting: true,
      render: text => moment(text.created_at).format('H:mm A')
    },
    {
      key: 'invoice_no',
      title: 'Invoice Number'
    },
    {
      key: 'customer_name',
      title: 'Customer Name'
    },
    {
      key: 'status',
      title: 'Status',
      align: 'center',
      render: text => <LabelText>{text.status}</LabelText>
    },
    {
      key: 'amount',
      title: 'Amount',
      align: 'center',
      render: text => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount);
      }
    }
  ];

  const dataSource = [
    {
      created_at: 1566199678696,
      order_no: '#INV332211AR',
      customer_name: 'Customer 1',
      status: 'PAID',
      amount: 999999999
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowsOnClick={handleOpen}
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
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <DetailInvoice />
      </Modal>
    </div>
  );
};

Body.propTypes = {};

export default Body;
