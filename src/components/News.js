import NewsItem from '../NewsItem'
import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [totalResults, setTotalResults] = useState(articles.totalResults)

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=6891e1eeedbe461bb896e38297e58fdf&page=${
      page + 1
    }&pageSize=${pageSize}`
    setPage(++page)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()

    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
  }
  const updateNews = async (page) => {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=6891e1eeedbe461bb896e38297e58fdf&page=${page}&pageSize=${pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()

    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
  }, [])

  // handleNext = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //   //   props.category
  //   // }&apiKey=6891e1eeedbe461bb896e38297e58fdf&page=${this.state
  //   //   .page+1}&pageSize=3`
  //   // this.setState({ loading: true })
  //   // let data = await fetch(url)
  //   // let parsedData = await data.json()

  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedData.articles,
  //   //   totalResults: this.state.totalResults - this.state.pageSize,
  //   //   loading: false,
  //   // })
  //   this.setState({
  //     page: ++this.state.page,
  //     totalResults: this.state.totalResults - this.state.pageSize,
  //   })
  //   this.updateNews()
  // }
  // handlePrevious = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //   //   props.category
  //   // }&apiKey=6891e1eeedbe461bb896e38297e58fdf&page=${this.state
  //   //   .page-1}&pageSize=3`
  //   // this.setState({ loading: true })
  //   // let data = await fetch(url)
  //   // let parsedData = await data.json()

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   totalResults: this.state.totalResults + this.state.pageSize,
  //   //   loading: false,
  //   // })
  //   this.setState({
  //     page: --this.state.page,
  //     totalResults: this.state.totalResults + this.state.pageSize,
  //   })
  //   this.updateNews()
  // }

  let { mode } = props
  return (
    <>
      <div
        className={`container  my-3 text-${
          mode === 'light' ? 'black' : 'white'
        }`}
      >
        <h2>Top Headlines</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((el) => {
                return (
                  <div className="col-md-4 col-sm-1" key={el.url}>
                    <NewsItem
                      mode={mode}
                      title={
                        el.title !== null
                          ? el.title.slice(0, 40).concat('...')
                          : ''
                      }
                      description={
                        el.description !== null
                          ? el.description.slice(0, 80).concat('...')
                          : ''
                      }
                      imageUrl={el.urlToImage}
                      newsUrl={el.url}
                      author={el.author}
                      date={el.publishedAt}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          {/* {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))} */}
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevious}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.totalResults <= 0}
            onClick={this.handleNext}
          >
            Next
          </button>
        </div> */}
      </div>
    </>
  )
}

News.defaultProps = {
  category: 'health',
}

News.propTypes = {
  category: PropTypes.string,
}

export default News
