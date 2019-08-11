import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import validate from 'validate.js';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    maxWidth: 600,
    width: 600
  },
  avatar: {
    width: 100,
    height: 100,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 16
  },
  msgHello: {
    marginBottom: 8
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    marginTop: 8,
    marginBottom: 8
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const Login = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleLogin = event => {
    event.preventDefault();

    console.log('NULL');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Paper className={classes.paper}>
          <Box py={3} px={7} display="flex" flexDirection="column">
            <Box
              mb={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar className={classes.avatar}>AR</Avatar>
              <Typography variant="h3" className={classes.msgHello}>
                Welcome back, Artha!
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Sign in to your account to continue
              </Typography>
            </Box>
            <Box>
              <form className={classes.form} onSubmit={handleLogin}>
                <TextField
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formState.values.email || ''}
                  error={hasError('email')}
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  className={classes.field}
                  placeholder="Email address"
                  variant="outlined"
                  required
                />
                <TextField
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={formState.values.password || ''}
                  error={hasError('password')}
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  className={classes.field}
                  placeholder="Password"
                  variant="outlined"
                  required
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="checkedB"
                      color="primary"
                      className={classes.field}
                    />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.field}
                >
                  SIGN IN
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.field}
                >
                  FORGET PASSWORD
                </Button>
              </form>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
