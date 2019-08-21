import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LabelBox } from '..';
import formatCurrency from '../../../../utils/formatCurrency';

const ItemSummary = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Items Summary</Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <LabelBox label="Category By Volume">CHART</LabelBox>
      </Grid>
      <Grid item md={6} xs={12}>
        <LabelBox label="Category By Sales">CHART</LabelBox>
      </Grid>
    </Grid>
  );
};

ItemSummary.propTypes = {};

export default ItemSummary;
