import { BackOfficeLayout } from '../src/layouts';
import { Settings } from '../src/views';
import 'isomorphic-unfetch';

const AccountSettings = () => {};

AccountSettings.pageTitle = 'Account Settings';
AccountSettings.Layout = BackOfficeLayout;
AccountSettings.Content = Settings.Account;
AccountSettings.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();

  let profile = await new Promise(resolve => {
    setTimeout(
      resolve({
        name: 'Artha Suryawan',
        email: 'x1.artha@gmail.com'
      }),
      3000
    );
  });

  let profileForm = await new Promise(resolve => {
    setTimeout(
      resolve.bind(null, {
        firstname: 'Artha',
        lastname: 'Suryawan',
        email: 'x1.artha@gmail.com',
        phoneNumber: '628123456789'
      }),
      2000
    );
  });

  return {
    profile,
    profileForm,
    test: 'LAPORAN',
    stars: json.stargazers_count
  };
};

export default AccountSettings;
