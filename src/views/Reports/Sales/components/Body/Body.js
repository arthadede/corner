import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import routes from './routes';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({}));

const Body = props => {
  const classes = useStyles();
  const router = useRouter();
  const [menu, setMenu] = React.useState('sales-summary');

  return (
    <Grid container spacing={3}>
      <Grid item md={3}>
        <List component="nav">
          {routes.map(route => (
            <ListItem
              button
              key={route.key}
              selected={route.key === menu}
              onClick={() => setMenu(route.key)}
            >
              <ListItemText primary={route.text} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item md={9}>
        {routes.map(route => (menu === route.key ? <route.component /> : null))}
      </Grid>
    </Grid>
  );
};

Body.propTypes = {};

export default Body;
