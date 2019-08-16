import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import BoxBordered from '../../../../../components/BoxBordered';
import PDFMake from '../../../../../components/PDFMake';
import { makeStyles } from '@material-ui/styles';
import formatReceipt from './formatReceipt';

const useStyles = makeStyles(theme => ({
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const ReceiptSale = props => {
  const classes = useStyles();
  const docDefinition = formatReceipt();
  const [input, setInput] = React.useState({});
  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Receipt Sale</span>
      </Box>
      <Divider />
      <Box py={3} px={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl
              required
              fullWidth
              variant="outlined"
              value={input.paperSize}
              onChange={e => setInput({ ...input, paperSize: e.target.value })}
            >
              <InputLabel>Paper Size</InputLabel>
              <Select native input={<OutlinedInput />}>
                <option value="" />
                <option value="a3">A3 (1cm x 1cm)</option>
                <option value="a4">A4 (2cm x 2cm)</option>
                <option value="a5">A5 (3cm x 3cm)</option>
                <option value="custom-size">Custom Size</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={input.paperSize === 'custom-size'}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Width"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">cm</InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Height"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">cm</InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Typography variant="caption">Receipt Preview</Typography>
            </Box>
            <PDFMake docDefinition={docDefinition} />
          </Grid>
        </Grid>
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

ReceiptSale.propTypes = {};

export default ReceiptSale;
