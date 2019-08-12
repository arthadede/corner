import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import BoxBordered from '../../components/BoxBordered';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  profileText: {
    marginRight: theme.spacing(8)
  },
  profileAvatar: {
    width: 100,
    height: 100
  },
  boxHeaderTitle: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  boxHeaderSubtitle: {
    display: 'inline-flex',
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }
}));

const Dashboard = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} sm={6} xs={12}>
        <BoxBordered>
          <Box py={3} px={4}>
            <Grid container>
              <Grid
                container
                lg={8}
                sm={12}
                direction="column"
                alignItems="flex-start"
                justify="center"
              >
                <Typography variant="h2" style={{ marginBottom: 8 }}>
                  Artha Dede
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  x1.artha@gmail.com
                </Typography>
              </Grid>
              <Grid item lg={4} sm={12}>
                <Avatar className={classes.profileAvatar}></Avatar>
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
            <Button color="primary" style={{ marginBottom: 8 }}>
              UPLOAD PICTURE
            </Button>
            <Button>REMOVE PICTURE</Button>
          </Box>
        </BoxBordered>
      </Grid>
      <Grid item lg={8} sm={6} xs={12}>
        <BoxBordered>
          <Box py={3} px={4}>
            <span className={classes.boxHeaderTitle}>Profile</span>
            <span className={classes.boxHeaderSubtitle}>
              The information can be edited
            </span>
          </Box>
          <Divider />
          <form action="">
            <Box py={3} px={4}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="First name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Last name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TextField
                    label="Phone number"
                    variant="outlined"
                    required
                    fullWidth
                  />
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
                SAVE PROFILES
              </Button>
            </Box>
          </form>
        </BoxBordered>
      </Grid>
    </Grid>
  );
};

Dashboard.displayName = 'Dashboard Page';

export default Dashboard;
