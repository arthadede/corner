import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Table from '../../../../../components/CustomizedTable';
import LabelText from '../../../../../components/LabelText';
import { makeStyles } from '@material-ui/styles';
import { DetailShift } from './components';

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
      key: 'start_at',
      title: 'Start Time',
      sorting: true,
      render: text => moment(text.start_at).format('H:mm A')
    },
    {
      key: 'end_at',
      title: 'End Time',
      sorting: true,
      render: text => moment(text.end_at).format('H:mm A')
    },
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'amount_expected',
      title: 'Amount Expected',
      render: text => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount_expected);
      }
    },
    {
      key: 'amount_difference',
      title: 'Amount Difference',
      render: text => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(text.amount_difference);
      }
    }
  ];

  const dataSource = [
    {
      start_at: 1566199678696,
      end_at: 1566199679000,
      name: 'Customer 1',
      amount_expected: 999999999,
      amount_difference: 999999999
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowsOnClick={handleOpen}
        rootOrder={{
          key: 'start_at',
          type: 'date/day'
        }}
        optionSortedCell={text =>
          moment(text, 'DD/MM/YYYY').format('dddd, D MMMM YYYY')
        }
        rowsPerPageOptions={[10, 25]}
        pagination
      />
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <DetailShift />
      </Modal>
    </div>
  );
};

Body.propTypes = {};

export default Body;
