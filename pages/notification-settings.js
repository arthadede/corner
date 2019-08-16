import { BackOfficeLayout } from '../src/layouts';
import { Settings } from '../src/views';

const NotificationSettings = () => {};

NotificationSettings.pageTitle = 'Notification Settings';
NotificationSettings.Layout = BackOfficeLayout;
NotificationSettings.Content = Settings.Notification;
NotificationSettings.getInitialProps = async () => {
  return {};
};

export default NotificationSettings;
