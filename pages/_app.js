import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth from '@material-ui/core/withWidth';
import NoSsr from '@material-ui/core/NoSsr';
import theme from '../src/theme';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: null
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let routeProps = this.state;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, routeProps };
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.width !== prevProps.width) {
      console.log(this.props.width);
      this.setState(state => ({
        ...state,
        breakpoint: this.props.width
      }));
    }
  }

  render() {
    const { Component, pageProps, routeProps } = this.props;

    return (
      <Container>
        <Head>
          <title>{`${Component.pageTitle} - Corner Apps`}</title>
        </Head>
        <NoSsr>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component.Layout name={Component.pageTitle} {...pageProps}>
              <Component.Content {...pageProps} {...routeProps} />
            </Component.Layout>
          </ThemeProvider>
        </NoSsr>
      </Container>
    );
  }
}

export default withWidth()(MyApp);
