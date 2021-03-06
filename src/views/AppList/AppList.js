import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonPaper from '../../components/ButtonPaper';

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
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
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
          <ButtonPaper
            className={classes.button}
            src="/static/images/app-list/cashier.png"
            label="CASHIER"
          />
          <ButtonPaper
            className={classes.button}
            src="/static/images/app-list/backoffice.png"
            label="BACK OFFICE"
          />
        </Box>
      </div>
    </div>
  );
};

export default AppList;
