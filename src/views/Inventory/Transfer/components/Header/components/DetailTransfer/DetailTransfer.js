import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import Table from '../../../../../../../components/CustomizedTable';
import BoxBordered from '../../../../../../../components/BoxBordered';
import AutoComplete from '../../../../../../../components/AutoComplete';
import IconButton from '../../../../../../../components/CustomizedIconButton';
import { makeStyles } from '@material-ui/styles';
import { FormTransfer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: 920
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  inputTable: {
    display: 'inline-block'
  },
  button: {
    '&:not(last-child)': {
      marginRight: theme.spacing(2)
    }
  }
}));

const DetailTransfer = props => {
  const classes = useStyles();

  const columns = [
    {
      key: 'sku',
      title: 'SKU',
      width: 140
    },
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'in_stock',
      title: 'In Stock',
      align: 'center',
      width: 160
    },
    {
      key: 'transfer',
      title: 'Transfer Quantity',
      align: 'center',
      width: 160
    },
    {
      key: 'actions',
      title: '',
      align: 'center',
      render: text => (
        <>
          <IconButton size="small" color="danger">
            <CloseIcon />
          </IconButton>
        </>
      )
    }
  ];

  const dataSource = [
    {
      sku: 'AAAA',
      name: 'Barang 1',
      in_stock: 3,
      transfer: 5
    },
    {
      sku: 'BBBB',
      name: 'Barang 2',
      in_stock: 3,
      transfer: 5
    },
    {
      sku: 'CCCC',
      name: 'Barang 3',
      in_stock: 3,
      transfer: 5
    }
  ];

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>New Transfer</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <AutoComplete
                label="From"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <AutoComplete label="To" variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Table
                columns={columns}
                dataSource={dataSource}
                footer={<FormTransfer />}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          py={3}
          px={4}
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
        >
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            SAVE TRANSFER
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

DetailTransfer.propTypes = {};

export default DetailTransfer;
