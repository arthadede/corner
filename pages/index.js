import { Dashboard } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

Dashboard.displayName = 'Dashboard';
Dashboard.pageTitle = 'Dashboard';
Dashboard.Layout = BackOfficeLayout;
Dashboard.getInitialProps = async () => ({});

export default Dashboard;
