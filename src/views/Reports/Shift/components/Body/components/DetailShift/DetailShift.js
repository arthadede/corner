import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import BoxBordered from '../../../../../../../components/BoxBordered';
import DescriptionList from '../../../../../../../components/DescriptionList';
import formatCurrency from '../../../../../../../utils/formatCurrency';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 900
  },
  body: {
    maxHeight: 400,
    overflow: 'auto'
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  subtitle: {
    ...theme.typography.body2,
    lineHeight: '50px',
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: '#0767DB',
    color: '#fff'
  }
}));

const DetailShift = props => {
  const classes = useStyles();

  const dataProfile = [
    {
      key: 'name',
      label: 'Name',
      value: 'Customer 1'
    },
    {
      key: 'address',
      label: 'Address',
      value: 'Alamat 1'
    },
    {
      key: 'phone_number',
      label: 'Phone Number',
      value: '+62 822 3704 5757'
    },
    {
      key: 'email',
      label: 'Email',
      value: 'x1.artha@gmail.com'
    }
  ];

  const dataCash = [
    {
      key: 'start_cash',
      label: 'Starting Cash',
      value: formatCurrency(999999999)
    },
    {
      key: 'end_cash',
      label: 'Actual Ending Cash',
      value: formatCurrency(999999999)
    },
    {
      key: 'expected_cash',
      label: 'Expected Ending Cash',
      value: formatCurrency(999999999)
    },
    {
      key: 'sales',
      label: 'Sales Cash',
      value: formatCurrency(999999999)
    },
    {
      key: 'invoice',
      label: 'Invoice Cash',
      value: formatCurrency(999999999)
    },
    {
      key: 'expense',
      label: 'Total Expense Cash',
      value: formatCurrency(999999999)
    },
    {
      key: 'income',
      label: 'Total Income Cash',
      value: formatCurrency(999999999)
    }
  ];

  const dataEDC = [
    {
      key: 'debit_and_credit_card',
      label: 'Debit / Credit Card',
      value: formatCurrency(999999999)
    },
    {
      key: 'voided',
      label: 'Voided',
      value: formatCurrency(999999999)
    },
    {
      key: 'expected_cash',
      label: 'Expected Cash',
      value: formatCurrency(999999999)
    }
  ];

  const dataTotal = [
    {
      key: 'expected_amount',
      label: 'Total Expected',
      value: formatCurrency(999999999)
    },
    {
      key: 'actual_amount',
      label: 'Total Actual',
      value: formatCurrency(999999999)
    },
    {
      key: 'difference_amount',
      label: 'Total Difference',
      value: formatCurrency(999999999)
    }
  ];

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Detail Shift</span>
      </Box>
      <Divider />
      <div className={classes.body}>
        <DescriptionList dataSource={dataProfile} />
        <div className={classes.subtitle}>Cash</div>
        <Divider />
        <DescriptionList dataSource={dataCash} />
        <div className={classes.subtitle}>EDC</div>
        <Divider />
        <DescriptionList dataSource={dataEDC} />
        <div className={classes.subtitle}>EDC</div>
        <Divider />
        <DescriptionList dataSource={dataEDC} />
        <div className={classes.subtitle}>Total</div>
        <DescriptionList dataSource={dataTotal} />
      </div>
      <Divider />
      <Box py={3} px={4}>
        <Button variant="outlined" color="primary">EXPORT CSV</Button>
      </Box>
    </BoxBordered>
  );
};

DetailShift.propTypes = {};

export default DetailShift;
