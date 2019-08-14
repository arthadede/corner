import { BackOfficeLayout } from '../src/layouts';
import { Dashboard } from '../src/views';

Dashboard.displayName = 'Dashboard';
Dashboard.pageTitle = 'Dashboard';
Dashboard.Layout = BackOfficeLayout;
Dashboard.Content = Dashboard;
Dashboard.getInitialProps = async () => ({});

export default Dashboard;
