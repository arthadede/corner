import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Table from '../../../../components/CustomizedTable';
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

const CustomerInfo = props => {
  const classes = useStyles();

  const dataSource = [
    {
      key: 'name',
      label: 'Name',
      value: 'Artha'
    },
    {
      key: 'address',
      label: 'Address',
      value: 'Jln Babarsari No D3'
    },
    {
      key: 'phone_number',
      label: 'Phone number',
      value: '+62 822 3704 5757'
    },
    {
      key: 'email',
      label: 'Email',
      value: 'x1.artha@gmail.com'
    },
    {
      key: 'birthday',
      label: 'Birthday',
      value: 1565982773521
    },
    {
      key: 'gender',
      label: 'Gender',
      value: 'Male'
    }
  ];

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Customer Info</span>
      </Box>
      <Divider />
      <DescriptionList dataSource={dataSource} />
    </BoxBordered>
  );
};

CustomerInfo.propTypes = {};

export default CustomerInfo;
