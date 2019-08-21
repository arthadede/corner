import React from 'react';
import Table from '../../../../../../../components/CustomizedTable';
import formatCurrency from '../../../../../../../utils/formatCurrency';

const CategorySales = () => {
  const columns = [
    {
      key: 'category',
      title: 'Category'
    },
    {
      key: 'items_sold',
      title: 'Items Sold'
    },
    {
      key: 'items_refunded',
      title: 'Items Refunded'
    },
    {
      key: 'gross_sales',
      title: 'Gross Sales',
      render: text => formatCurrency(text.gross_sales)
    },
    {
      key: 'discount_amount',
      title: 'Discount',
      render: text => formatCurrency(text.discount_amount)
    },
    {
      key: 'refund_amount',
      title: 'Refund',
      render: text => formatCurrency(text.refund_amount)
    },
    {
      key: 'net_sales',
      title: 'Net Sales',
      render: text => formatCurrency(text.net_sales)
    },
    {
      key: 'gross_profit',
      title: 'Gross Profit',
      render: text => formatCurrency(text.gross_profit)
    },
    {
      key: 'gross_margin',
      title: 'Gross Margin'
    }
  ];

  const dataSource = [
    {
      category: 'Category 1',
      items_sold: 999,
      items_refunded: 999,
      gross_sales: 999999999,
      discount_amount: 999999999,
      refund_amount: 999999999,
      net_sales: 999999999,
      gross_profit: 999999999,
      gross_margin: '100%'
    },
    {
      category: 'Category 2',
      items_sold: 999,
      items_refunded: 999,
      gross_sales: 999999999,
      discount_amount: 999999999,
      refund_amount: 999999999,
      net_sales: 999999999,
      gross_profit: 999999999,
      gross_margin: '90%'
    },
    {
      category: 'Category 3',
      items_sold: 999,
      items_refunded: 999,
      gross_sales: 999999999,
      discount_amount: 999999999,
      refund_amount: 999999999,
      net_sales: 999999999,
      gross_profit: 999999999,
      gross_margin: '80%'
    }
  ];
  return <Table columns={columns} dataSource={dataSource} pagination />;
};

export default CategorySales;
