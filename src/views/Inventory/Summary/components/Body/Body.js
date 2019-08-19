import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../../components/CustomizedTable';

const Body = props => {
  const columns = [
    {
      key: 'name',
      title: 'Name',
      sorting: true
    },
    {
      key: 'category',
      title: 'Category',
      align: 'center',
      sorting: true
    },
    {
      key: 'beginning',
      title: 'Beginning',
      align: 'center'
    },
    {
      key: 'purchase_order',
      title: 'Purchase Order',
      align: 'center'
    },
    {
      key: 'sales',
      title: 'Sales',
      align: 'center'
    },
    {
      key: 'transfer',
      title: 'Transfer',
      align: 'center'
    },
    {
      key: 'adjustment',
      title: 'Adjustment',
      align: 'center'
    },
    {
      key: 'ending',
      title: 'Ending',
      align: 'center'
    }
  ];

  const dataSource = [
    {
      name: 'Example 1',
      category: 'Category 1',
      beginning: 999,
      purchase_order: 999,
      sales: 999,
      transfer: 999,
      adjustment: 999,
      ending: 999
    },
    {
      name: 'Example 2',
      category: 'Category 2',
      beginning: 999,
      purchase_order: 999,
      sales: 999,
      transfer: 999,
      adjustment: 999,
      ending: 999
    },
    {
      name: 'Example 3',
      category: 'Category 3',
      beginning: 999,
      purchase_order: 999,
      sales: 999,
      transfer: 999,
      adjustment: 999,
      ending: 999
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} pagination />
    </div>
  );
};

Body.propTypes = {};

export default Body;
