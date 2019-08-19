import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddOutlined';
import IconButton from '../../../../../../../../../components/CustomizedIconButton';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  field: {
    display: 'inline-block'
  }
}));

const FormTransfer = props => {
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
      <TableCell align="center">
        <IconButton size="small" color="success">
          <AddIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

FormTransfer.propTypes = {};

export default FormTransfer;
