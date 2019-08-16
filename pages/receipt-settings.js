import { BackOfficeLayout } from '../src/layouts';
import { Settings } from '../src/views';

const ReceiptSettings = () => {};

ReceiptSettings.pageTitle = 'Receipt Settings';
ReceiptSettings.Layout = BackOfficeLayout;
ReceiptSettings.Content = Settings.Receipt;
ReceiptSettings.getInitialProps = async () => {
  return {};
};

export default ReceiptSettings;
