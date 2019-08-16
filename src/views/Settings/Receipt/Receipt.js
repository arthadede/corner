import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {
  FormReceipt,
  ReceiptSale,
  ReceiptRefund,
  ReceiptInvoice
} from './components';

const Account = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Select outlet</InputLabel>
              <Select native input={<OutlinedInput />}>
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <FormReceipt />
          </Grid>
          <Grid item md={6} xs={12}>
            <ReceiptSale />
          </Grid>
          <Grid item md={6} xs={12}>
            <ReceiptRefund />
          </Grid>
          <Grid item md={6} xs={12}>
            <ReceiptInvoice />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Account.displayName = 'AccountSettings';
Account.propTypes = {
  profile: PropTypes.object.isRequired,
  profileForm: PropTypes.object.isRequired
};

export default Account;
