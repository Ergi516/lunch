import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Home from '../containers/Home';
import Internets from './Internets';
import { getRestaurants } from '../reducers/restaurantsReducers';

import '../styles/css/main.css';
import '../styles/css/header.css';
import '../styles/css/navbar.css';
import '../styles/css/restaurant_preview.css';
import '../styles/css/restaurant_show.css';
import '../styles/css/restaurant_info_marker.css';
import '../styles/css/web_map.css';
import '../styles/css/restaurant_tooltip.css';

class MainContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRestaurants());
  }

  render() {
    const { appReducer } = this.props;

    return (
      <div className="App">
        <Header />
        <section className="content-container">
          {appReducer.currentPage === 'lunch' ? <Home /> : <Internets />}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(MainContainer);
