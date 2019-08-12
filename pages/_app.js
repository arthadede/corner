import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import theme from '../src/theme';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: null
    };
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const rootState = this.state;

    return (
      <Container>
        <Head>
          <title>{`Corner Apps - ${Component.pageTitle}`}</title>
        </Head>
        <NoSsr>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component.Layout
              name={Component.pageTitle}
              onBreakpoint={value =>
                this.setState(state => {
                  return {
                    ...state,
                    breakpoint: value
                  };
                })
              }
              {...pageProps}
            >
              <Component {...pageProps} {...rootState} />
            </Component.Layout>
          </ThemeProvider>
        </NoSsr>
      </Container>
    );
  }
}

export default MyApp;
