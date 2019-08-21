import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from '../../../../../../../components/CustomizedTable';
import BoxBordered from '../../../../../../../components/BoxBordered';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';
import { FormRecord } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: 920
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const DetailInvoice = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      key: 'notes',
      title: 'Notes'
    },
    {
      key: 'received',
      title: 'Received'
    },
    {
      key: 'amount',
      title: 'Amount'
    },
    {
      key: 'payment_date',
      title: 'Payment date'
    },
    {
      key: 'remain',
      title: 'Remain'
    }
  ];

  const dataSource = [
    {
      notes: 'Note 1',
      received: 'Customer 1',
      amount: 999999999,
      payment_date: 1566199678696,
      remain: 999999999
    }
  ];

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>#INV103422SS</span>
      </Box>
      <Divider />
      <Table columns={columns} dataSource={dataSource} pagination />
      <Divider />
      <Box py={3} px={4}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Create Record
        </Button>
        <Modal open={open} onClose={handleClose} className={classes.modal}>
          <FormRecord onClose={handleClose} />
        </Modal>
      </Box>
    </BoxBordered>
  );
};

DetailInvoice.propTypes = {};

export default DetailInvoice;
