import { BackOfficeLayout } from '../src/layouts';
import { Reports } from '../src/views';

const ReportsShift = () => {};

ReportsShift.pageTitle = 'Shift Reports';
ReportsShift.Layout = BackOfficeLayout;
ReportsShift.Content = Reports.Shift;
ReportsShift.getInitialProps = async () => {
  return {};
};

export default ReportsShift;
