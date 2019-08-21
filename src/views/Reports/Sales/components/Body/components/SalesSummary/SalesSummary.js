import React from 'react';
import PropTypes from 'prop-types';
import BoxBordered from '../../../../../../../components/BoxBordered';
import DescriptionList from '../../../../../../../components/DescriptionList';
import formatCurrency from '../../../../../../../utils/formatCurrency';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  headerText: {
    ...theme.typography.body2,
    backgroundColor: '#0767DB',
    lineHeight: '50px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: '#fff'
  }
}));

const SalesSummary = props => {
  const classes = useStyles();

  const dataSource = [
    {
      key: 'gross_sales',
      label: 'Gross Sales',
      value: formatCurrency(999999999)
    },
    {
      key: 'discounts',
      label: 'Discounts',
      value: formatCurrency(999999999)
    },
    {
      key: 'refunds',
      label: 'Refunds',
      value: formatCurrency(999999999)
    },
    {
      key: 'net_sales',
      label: 'Net Sales',
      value: formatCurrency(999999999)
    },
    {
      key: 'gratuity',
      label: 'Gratuity',
      value: formatCurrency(999999999)
    },
    {
      key: 'tax',
      label: 'Tax',
      value: formatCurrency(999999999)
    },
    {
      key: 'rounding',
      label: 'Rounding',
      value: formatCurrency(999999999)
    },
    {
      key: 'collected',
      label: 'Total Collected',
      value: formatCurrency(999999999)
    }
  ];
  return (
    <BoxBordered>
      <div className={classes.headerText}>Selasa, 11 January 2019</div>
      <DescriptionList dataSource={dataSource} />
    </BoxBordered>
  );
};

SalesSummary.propTypes = {};

export default SalesSummary;
