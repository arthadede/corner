import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Slide from '@material-ui/core/Slide';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import AntSwitch from '../../../../../../../components/AntSwitch';
import BoxBordered from '../../../../../../../components/BoxBordered';
import IconButton from '../../../../../../../components/CustomizedIconButton';
import MaskedPhoneInput from '../../../../../../../components/MaskedPhoneInput';
import FormControlSwitch from '../../../../../../../components/FormControlSwitch';
import AutoComplete from '../../../../../../../components/AutoComplete';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 800
  },
  body: {
    overflowX: 'auto',
    maxHeight: 400
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  avatar: {
    width: 100,
    height: 100
  },
  outletItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 16px',
    margin: '16px 0',
    height: 51
  }
}));

const dataOutlets = [
  { key: 1, text: 'corner-1' },
  { key: 2, text: 'corner-2' },
  { key: 3, text: 'corner-3' },
  { key: 4, text: 'corner-4' },
  { key: 5, text: 'corner-5' },
  { key: 6, text: 'corner-6' },
  { key: 7, text: 'corner-7' }
];

const DetailEmployee = props => {
  const classes = useStyles();

  const [input, setInput] = React.useState({});

  const handleRemoveOutlets = selected => {
    const newOutlets = input.outlets.filter(item => item !== selected);
    setInput({ ...input, outlets: newOutlets });
  };

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Detail Employee</span>
      </Box>
      <Divider />
      <form action="">
        <Box p={3} className={classes.body}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <BoxBordered>
                    <Box py={3} display="flex" justifyContent="center">
                      <Avatar className={classes.avatar}>AA</Avatar>
                    </Box>
                    <Divider />
                    <Box
                      py={2}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Box pb={1}>
                        <Button color="primary">UPLOAD PICTURE</Button>
                      </Box>
                      <Box>
                        <Button>REMOVE PICTURE</Button>
                      </Box>
                    </Box>
                  </BoxBordered>
                </Grid>
                <Grid item xs={12}>
                  <FormControlSwitch
                    control={
                      <AntSwitch
                        // checked={true}
                        // onChange={handleChange('checkedB')}
                        value="checkedB"
                        color="primary"
                      />
                    }
                    label="Status"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="First name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Last name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl required fullWidth variant="outlined">
                    <InputLabel>Phone number</InputLabel>
                    <OutlinedInput
                      startAdornment={
                        <InputAdornment position="start" variant="outlined">
                          +62
                        </InputAdornment>
                      }
                      inputComponent={MaskedPhoneInput}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="outlined" fullWidth required>
                    <InputLabel>City</InputLabel>
                    <Select native input={<OutlinedInput />}>
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="outlined" fullWidth required>
                    <InputLabel>Province</InputLabel>
                    <Select native input={<OutlinedInput />}>
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth required>
                    <InputLabel>Select role</InputLabel>
                    <Select native input={<OutlinedInput />}>
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <AutoComplete
                    label="Outlets Access"
                    variant="outlined"
                    optionValueProp="key"
                    optionLabelProp="text"
                    dataSource={dataOutlets}
                    onChange={val => setInput({ ...input, outlets: val })}
                    value={input.outlets}
                  />
                  {input.outlets && (
                    <div>
                      {dataOutlets
                        .filter(outlet => input.outlets.includes(outlet.key))
                        .map(item => (
                          <Paper key={item.key} className={classes.outletItem}>
                            <Grid container alignItems="center">
                              <Grid item xs={10}>
                                <Typography variant="body1">
                                  {item.text}
                                </Typography>
                              </Grid>
                              <Grid item xs={2} align="right">
                                <IconButton size="small" color="danger">
                                  <CloseIcon
                                    onClick={() =>
                                      handleRemoveOutlets(item.key)
                                    }
                                  />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Paper>
                        ))}
                    </div>
                  )}
                </Grid>
              </Grid>
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
            SAVE OUTLET
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

DetailEmployee.propTypes = {};

export default DetailEmployee;
