import { BackOfficeLayout } from '../src/layouts';
import { Reports } from '../src/views';

const ReportsSales = () => {};

ReportsSales.pageTitle = 'Sales Reports';
ReportsSales.Layout = BackOfficeLayout;
ReportsSales.Content = Reports.Sales;
ReportsSales.getInitialProps = async (req, res) => {
  const { query } = req;
  return { query };
};

export default ReportsSales;
