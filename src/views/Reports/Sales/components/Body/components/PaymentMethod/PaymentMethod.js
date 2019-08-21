import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const PaymentMethod = props => {
  const columns = [
    {
      key: 'payment_method',
      title: 'Payment Method'
    },
    {
      key: 'amount_transaction',
      title: 'Transactions'
    },
    {
      key: 'amount_collected',
      title: 'Collected',
      render: text => formatCurrency(text.amount_collected)
    }
  ];

  const dataSource = [
    {
      payment_method: 'Cash',
      amount_transaction: 999,
      amount_collected: 999999999
    },
    {
      payment_method: 'Debit / Credit',
      amount_transaction: 999,
      amount_collected: 999999999
    },
    {
      payment_method: 'Invoice',
      amount_transaction: 999,
      amount_collected: 999999999
    }
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

PaymentMethod.propTypes = {};

export default PaymentMethod;
