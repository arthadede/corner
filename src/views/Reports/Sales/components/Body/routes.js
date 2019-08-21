import {
  SalesSummary,
  PaymentMethod,
  SalesType,
  ItemSales,
  CategorySales,
  Discounts,
  Taxes,
  Gratuity,
  CollectedBy
} from './components';

export default [
  {
    key: 'sales-summary',
    text: 'Sales Summary',
    component: SalesSummary
  },
  {
    key: 'payment-method',
    text: 'Payment Method',
    component: PaymentMethod
  },
  {
    key: 'sales-type',
    text: 'Sales Type',
    component: SalesType
  },
  {
    key: 'item-sales',
    text: 'Item Sales',
    component: ItemSales
  },
  {
    key: 'category-sales',
    text: 'Category Sales',
    component: CategorySales
  },
  {
    key: 'discounts',
    text: 'Discounts',
    component: Discounts
  },
  {
    key: 'taxes',
    text: 'Taxes',
    component: Taxes
  },
  {
    key: 'gratuity',
    text: 'Gratuity',
    component: Gratuity
  },
  {
    key: 'collected_by',
    text: 'Collected By',
    component: CollectedBy
  }
];
