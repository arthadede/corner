import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Table from '../../../../../components/CustomizedTable';
import BoxBordered from '../../../../../components/BoxBordered';
import DescriptionList from '../../../../../components/DescriptionList';
import formatCurrency from '../../../../../utils/formatCurrency';
import { makeStyles } from '@material-ui/styles';
import { DetailTransaction } from './components';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
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
      key: 'receipt_number',
      title: 'Receipt Number',
      sorting: true
    },
    {
      key: 'cashier',
      title: 'Cashier'
    },
    {
      key: 'items',
      title: 'Items',
      render: text => text.items.join(', ')
    },
    {
      key: 'amount_expected',
      title: 'Amount Expected',
      render: text => formatCurrency(text.amount_expected)
    }
  ];

  const dataSource = [
    {
      created_at: 1566199678696,
      receipt_number: '#AAAA',
      cashier: 'Cashier 1',
      items: ['Barang 1', 'Barang 2'],
      amount_expected: 999999999
    }
  ];

  const dataTotal = [
    {
      key: 'transactions',
      label: 'Transactions',
      value: 999
    },
    {
      key: 'collected',
      label: 'Collected',
      value: formatCurrency(999999999)
    },
    {
      key: 'net_sales',
      label: 'Net Sales',
      value: formatCurrency(999999999)
    }
  ];

  return (
    <Grid container spacing={3}>
      <Grid item md={3}>
        <BoxBordered className={classes.root}>
          <Box py={3} px={4}>
            <span className={classes.headerText}>Total Transaction</span>
          </Box>
          <Divider />
          <DescriptionList dataSource={dataTotal} />
        </BoxBordered>
      </Grid>
      <Grid item md={9}>
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
          <DetailTransaction />
        </Modal>
      </Grid>
    </Grid>
  );
};

Body.propTypes = {};

export default Body;
