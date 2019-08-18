import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import BoxBordered from '../../../../components/BoxBordered';
import DescriptionList from '../../../../components/DescriptionList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const CustomerHighlight = props => {
  const classes = useStyles();

  const dataSource = [
    {
      key: 'created_at',
      label: 'Customer Since',
      value: 'Artha'
    },
    {
      key: 'latest_transaction',
      label: 'Last Transaction',
      value: moment(1565982773521).fromNow()
    },
    {
      key: 'amount_transaction',
      label: 'Total Transactions',
      value: 999
    },
    {
      key: 'amount_lifetime',
      label: 'Lifetime Amount',
      value: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(999999)
    },
    {
      key: 'amount_average',
      label: 'Average Amount',
      value: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(999999)
    }
  ];

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Customer Highlights</span>
      </Box>
      <Divider />
      <DescriptionList dataSource={dataSource} />
    </BoxBordered>
  );
};

CustomerHighlight.propTypes = {};

export default CustomerHighlight;
