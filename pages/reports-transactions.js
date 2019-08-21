import { BackOfficeLayout } from '../src/layouts';
import { Reports } from '../src/views';

const ReportsTransactions = () => {};

ReportsTransactions.pageTitle = 'Transactions Reports';
ReportsTransactions.Layout = BackOfficeLayout;
ReportsTransactions.Content = Reports.Transactions;
ReportsTransactions.getInitialProps = async () => {
  return {};
};

export default ReportsTransactions;
