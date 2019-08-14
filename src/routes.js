import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import TimelineIcon from '@material-ui/icons/TimelineOutlined';
import SupervisorIcon from '@material-ui/icons/SupervisorAccountOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import StoreIcon from '@material-ui/icons/StoreOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

export default [
  { name: 'Dashboard', page: 'index', path: '/', icon: DashboardIcon },
  {
    name: 'Reports',
    icon: TimelineIcon,
    children: [
      { name: 'Sales', page: 'report-sales', path: '/reports/sales' },
      {
        name: 'Transactions',
        page: 'report-transactions',
        path: '/reports/transactions'
      },
      { name: 'Invoices', page: 'report-invoices', path: '/reports/invoices' },
      { name: 'Shift', page: 'report-shift', path: '/reports/shift' }
    ]
  },
  {
    name: 'Library',
    icon: FavoriteIcon,
    children: [
      { name: 'Item Library', page: 'library-items', path: '/library/items' },
      {
        name: 'Categories',
        page: 'library-categories',
        path: '/library/categories'
      },
      { name: 'Promo', page: 'library-promo', path: '/library/promo' },
      {
        name: 'Discounts',
        page: 'library-discounts',
        path: '/library/discounts'
      },
      { name: 'Taxes', page: 'library-taxes', path: '/library/taxes' },
      { name: 'Gratuity', page: 'library-gratuity', path: '/library/gratuity' },
      {
        name: 'Sales Type',
        page: 'library-sales-type',
        path: '/library/sales-type'
      }
    ]
  },
  {
    name: 'Inventory',
    icon: ReceiptIcon,
    children: [
      {
        name: 'Summary',
        page: 'inventory-summary',
        path: '/inventory/summary'
      },
      {
        name: 'Suppliers',
        page: 'inventory-suppliers',
        path: '/inventory/suppliers'
      },
      {
        name: 'Purchase Order',
        page: 'inventory-purchase-order',
        path: '/inventory/purchase-order'
      },
      {
        name: 'Transfer',
        page: 'inventory-transfer',
        path: '/inventory/transfer'
      },
      {
        name: 'Adjustment',
        page: 'inventory-adjustment',
        path: '/inventory/adjustment'
      }
    ]
  },
  {
    name: 'Costumers',
    icon: SupervisorIcon,
    page: 'costumers',
    path: '/costumers'
  },
  {
    name: 'Employees',
    icon: LockIcon,
    children: [
      {
        name: 'Employee Accounts',
        page: 'employee-account',
        path: '/employee/account'
      },
      {
        name: 'Employee Access',
        page: 'employee-access',
        path: '/employee/access'
      }
    ]
  },
  {
    name: 'Outlets',
    icon: StoreIcon,
    page: 'outlets',
    path: '/outlets'
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
    children: [
      { name: 'Account', page: 'account-settings', path: '/settings/account' },
      { name: 'Outlets', page: 'settings-outlets', path: '/settings/outlets' },
      {
        name: 'Payment Method',
        page: 'settings-payment',
        path: '/settings/payment'
      },
      {
        name: 'Checkout',
        page: 'settings-checkout',
        path: '/settings/checkout'
      },
      {
        name: 'Email Notification',
        page: 'settings-notification',
        path: '/settings/notification'
      }
    ]
  }
];
