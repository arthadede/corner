import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {},
  title: {
    marginBottom: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
      cursor: 'pointer'
    }
  },
  avatar: {
    width: 110,
    height: 110,
    marginBottom: 16
  }
}));

const AppList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper} container>
        <Typography
          variant="h3"
          color="textSecondary"
          align="center"
          className={classes.title}
        >
          SELECT APPS
        </Typography>
        <Box display="flex" flexDirection="row">
          <Paper className={classes.paper}>
            <img
              src="/static/images/app-list/cashier.png"
              alt="outlet1.png"
              height="110px"
              width="110px"
              className={classes.avatar}
            />
            <Typography variant="subtitle2" color="inherit" align="center">
              CASHIER
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <img
              src="/static/images/app-list/backoffice.png"
              alt="outlet1.png"
              height="110px"
              width="110px"
              className={classes.avatar}
            />
            <Typography variant="subtitle2" color="inherit" align="center">
              BACK OFFICE
            </Typography>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default AppList;
