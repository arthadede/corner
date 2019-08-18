import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Table from '../../../../components/CustomizedTable';
import BoxBordered from '../../../../components/BoxBordered';
import CustomizedIconButton from '../../../../components/CustomizedIconButton';
import { makeStyles } from '@material-ui/styles';
import { DetailTransaction } from './components';

const useStyles = makeStyles(theme => ({
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

const PurchaseHistory = props => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(null);

  const handleOpen = key => {
    setSelected(key);
  };

  const handleClose = key => {
    setSelected(null);
  };

  const columns = [
    {
      key: 'created_at',
      title: 'Date',
      sorting: true,
      render: text => moment(text.created_at).fromNow()
    },
    {
      key: 'outlet',
      title: 'Outlet',
      sorting: true
    },
    {
      key: 'qty',
      title: 'Total Items',
      align: 'center',
      sorting: true
    },
    {
      key: 'amount',
      title: 'Sale',
      align: 'center',
      sorting: true,
      render: text =>
        new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount)
    },
    {
      key: 'actions',
      title: '',
      align: 'center',
      render: text => (
        <>
          <CustomizedIconButton
            color="primary"
            onClick={() => handleOpen(text.created_at)}
          >
            <RemoveRedEyeIcon />
          </CustomizedIconButton>
        </>
      )
    }
  ];

  const dataSource = [
    {
      created_at: 1565982773521,
      outlet: 'Aroki',
      qty: 11,
      amount: 999999999
    }
  ];

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Purchase History</span>
      </Box>
      <Divider />
      <Table columns={columns} dataSource={dataSource} pagination />
      <Modal open={selected} onClose={handleClose} className={classes.modal}>
        <DetailTransaction />
      </Modal>
    </BoxBordered>
  );
};

PurchaseHistory.propTypes = {};

export default PurchaseHistory;
