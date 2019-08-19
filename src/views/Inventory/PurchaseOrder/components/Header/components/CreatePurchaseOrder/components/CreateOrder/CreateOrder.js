import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddOutlined';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '../../../../../../../../../components/CustomizedIconButton';
import MaskedCurrencyInput from '../../../../../../../../../components/MaskedCurrencyInput';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  field: {
    display: 'inline-block'
  }
}));

const CreateOrder = props => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>
        <TextField fullWidth className={classes.field} />
      </TableCell>
      <TableCell>
        <TextField fullWidth className={classes.field} />
      </TableCell>
      <TableCell align="center">3</TableCell>
      <TableCell>
        <TextField
          fullWidth
          className={classes.field}
          inputProps={{ style: { textAlign: 'center' } }}
        />
      </TableCell>
      <TableCell>
        <FormControl className={classes.field}>
          <Input
            inputComponent={MaskedCurrencyInput}
            inputProps={{ style: { textAlign: 'center' } }}
          />
        </FormControl>
      </TableCell>
      <TableCell>
        {new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(999999999)}
      </TableCell>
      <TableCell>
        <IconButton size="small" color="success">
          <AddIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

CreateOrder.propTypes = {};

export default CreateOrder;
