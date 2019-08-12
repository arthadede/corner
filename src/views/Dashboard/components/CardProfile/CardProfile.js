import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import BoxBordered from '../../../../components/BoxBordered';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  profileAvatar: {
    width: 100,
    height: 100
  }
}));

const CardProfile = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <Grid container alignItems="center">
          <Box flexGrow={1}>
            <Typography variant="h2">Artha Dede</Typography>
            <Typography variant="body1" color="textSecondary">
              x1.artha@gmail.com
            </Typography>
          </Box>
          <Avatar className={classes.profileAvatar}></Avatar>
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
  );
};

CardProfile.propTypes = {};

export default CardProfile;
