import React, { Component } from "react";
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import Routes from './Routes';
import Header from "./Components/Header/Header";

//actions
import { setUserData, setLoadingState } from "./actions/userActions";
import { setAlbumData } from "./actions/photoActions";

//styles
import { Wrapper, Spinner } from "./styledCSS/styles";
import './App.css';

class App extends Component {
  loadFbLoginApi = () => {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '411408086280453',
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v3.2'
      });

      FB.login(FB.getLoginStatus((response) => {
        console.log("login", response);
        if (response.status === 'connected') {

          FB.api('/me', (response) => {

            console.log('Successful login for: ' + response.name);
            this.props.setUserData(response);
            this.props.setLoadingState(false);
            FB.api(
              `/${response.id}/albums`, (response) => {
                if (response && !response.error) {
                  this.props.setAlbumToStore(response.data);
                }
              }
            );

            FB.api(
              `/${response.id}/picture`, (response) => {
                if (response && !response.error) {
                  console.log("picture", response);
                }
                if (response.error) {
                  console.log("Picture api has failed", response.error);
                }
              }
            );

          });
        }
      }), {
          scope: 'user_photos',
          return_scopes: true
        });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  componentDidMount() {
    this.loadFbLoginApi();
  }

  render() {
    return (
      <div>
        {
          this.props.loadingState ?
            <Wrapper >
              <Spinner />
            </Wrapper>
            :
            <Router>
              <Layout className="App" >
                <Header />
                <Layout.Content>
                  <Routes />
                </Layout.Content>
                <Layout.Footer style={{ padding: 0 }}>
                  {/* footer goes here */}
                </Layout.Footer>
              </Layout>
            </Router>
        }
      </div>
    );
  }
};

App.propTypes = {
  setAlbumToStore: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  setLoadingState: PropTypes.func.isRequired,
  loadingState: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setAlbumToStore: (albumData) => dispatch(setAlbumData(albumData)),
  setUserData: userData => dispatch(setUserData(userData)),
  setLoadingState: toggleValue => dispatch(setLoadingState(toggleValue)),
});

const mapStateToProps = state => ({
  loadingState: state.user.loading,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);