import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
//capitalizeFirstLetter = (string)=>{
  //return (string.chartAt(0).toUpperCase() + string.slice(1))
//}
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
//document.title = `${this.capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews(){
    this.props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsedData = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }); 
    this.props.setprogress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
   
  handleNext = async () => {
    
    
    this.setState({page:this.state.page + 1})
    this.updateNews()
  };
  handlePrev = async () => {
    
    this.setState({page:this.state.page - 1})
      this.updateNews();
  }
  
   fetchMoreData = async ()=>{
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
this.setState({page:this.state.page + 1})
this.setState({ loading: true });
let data = await fetch(url);
let parsedData = await data.json();
this.setState({
  articles:this.state.articles.concat( parsedData.articles),
  totalResults: parsedData.totalResults,
  loading: false,
})
   } 
    

  render() {
    return (
<>  <div className="text-center">
        <h1>Newsify - Top Headlines </h1>
        </div>
      
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}>
            <div className="container">
        <div className="row my-5">
          {this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-2" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeNQo7yVoU_dTTgRAbnfbFMxwUywtFoXiZRZ1lisU2Q&s"
                    }
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
       
    
</>    
    );
  }
}

export default News;
