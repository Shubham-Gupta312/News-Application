import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    cateogry: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  articles = [];

  constructor() {
    super();
    // console.log("Hello I am Constructor")
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("Component did Mount"); // this function run after render.
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f22dae4e83b484b9cccd6acd92f54af&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handleNextClick = async () => {
    // console.log("Next Click");

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f22dae4e83b484b9cccd6acd92f54af&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({ articles: parsedData.articles });

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };

  handlePreviousClick = async () => {
    // console.log("Previous Clicked");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f22dae4e83b484b9cccd6acd92f54af&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={element.description ? element.description : " "}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            className="btn btn-dark">{" "} &larr; Previous
          </button>
          <button
            type="button"
            disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize))}
            onClick={this.handleNextClick}
            className="btn btn-dark">{" "} Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
