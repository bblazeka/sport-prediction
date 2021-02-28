import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../services/news';
import Loader from '../../components/Loader/Loader';

import './Home.scss';
import { SocialFeed } from '../../components';
import NewsFeed from '../../components/NewsFeed/NewsFeed';

class Home extends Component {

  componentDidMount() {
    this.props.getNews("NHL");
    this.props.getTweets("NHL");
  }

  render() {
    const { homeNews, tweets } = this.props;
    if (!homeNews) {
      return (<div><Loader></Loader></div>)
    }
    return (
      <div className="news-container">
        <NewsFeed news={homeNews}></NewsFeed>
        <SocialFeed tweets={tweets}></SocialFeed>
      </div>);
  }
}

const mapStateToProps = state => ({
  homeNews: state.news.news,
  teams: state.team.teams,
  tweets: state.news.tweets,
})

const mapDispatchToProps = dispatch => ({
  getNews: (query) => dispatch(actions.getNews(query)),
  getTweets: (query) => dispatch(actions.getTweets(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);