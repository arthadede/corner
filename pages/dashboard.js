import { BackOfficeLayout } from '../src/layouts';
import { Dashboard } from '../src/views';

const DashboardPage = () => {};

DashboardPage.pageTitle = 'Sales Reports';
DashboardPage.Layout = BackOfficeLayout;
DashboardPage.Content = Dashboard;
DashboardPage.getInitialProps = async () => {
  return {};
};

export default DashboardPage;
