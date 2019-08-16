import { BackOfficeLayout } from '../src/layouts';
import { Settings } from '../src/views';

const CheckoutSettings = () => {};

CheckoutSettings.pageTitle = 'Checkout Settings';
CheckoutSettings.Layout = BackOfficeLayout;
CheckoutSettings.Content = Settings.Checkout;
CheckoutSettings.getInitialProps = async () => {
  return {};
};

export default CheckoutSettings;
