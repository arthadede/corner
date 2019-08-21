import { BackOfficeLayout } from '../src/layouts';
import { Reports } from '../src/views';

const ReportsInvoices = () => {};

ReportsInvoices.pageTitle = 'Invoice Reports';
ReportsInvoices.Layout = BackOfficeLayout;
ReportsInvoices.Content = Reports.Invoices;
ReportsInvoices.getInitialProps = async () => {
  return {};
};

export default ReportsInvoices;
