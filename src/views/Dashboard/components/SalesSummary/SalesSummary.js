import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LabelBox } from '..';
import formatCurrency from '../../../../utils/formatCurrency';

const SalesSummary = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Sales Summary</Typography>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <LabelBox
          label="Gross Sales"
          value={formatCurrency(99999999).toString()}
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <LabelBox
          label="Transaction"
          value={formatCurrency(99999999).toString()}
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <LabelBox
          label="Gross Profit"
          value={formatCurrency(99999999).toString()}
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <LabelBox
          label="Net Sales"
          value={formatCurrency(99999999).toString()}
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <LabelBox
          label="Gross Margin"
          value={formatCurrency(99999999).toString()}
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <LabelBox
          label="Average Sale Per Transaction"
          value={formatCurrency(99999999).toString()}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <LabelBox label="Daily Gross Sales Amount">CHART</LabelBox>
      </Grid>
      <Grid item md={3} xs={12}>
        <LabelBox label="Day Of The Week Gross Sales Amount">CHART</LabelBox>
      </Grid>
      <Grid item md={3} xs={12}>
        <LabelBox label="Hourly Gross Sales Amount">CHART</LabelBox>
      </Grid>
    </Grid>
  );
};

SalesSummary.propTypes = {};

export default SalesSummary;
