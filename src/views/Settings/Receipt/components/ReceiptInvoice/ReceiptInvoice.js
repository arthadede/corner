import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import BoxBordered from '../../../../../components/BoxBordered';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const ReceiptInvoice = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Receipt Invoice</span>
      </Box>
      <Divider />
      <Box py={3} px={4}>
        <h2>PAPER</h2>
      </Box>
      <Divider />
      <Box
        py={3}
        px={4}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Button color="primary" variant="contained">
          SAVE RECEIPT
        </Button>
      </Box>
    </BoxBordered>
  );
};

ReceiptInvoice.propTypes = {};

export default ReceiptInvoice;
