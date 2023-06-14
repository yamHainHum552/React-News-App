import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, mode, author, date } = props
  return (
    <div>
      <div className={`card bg-${mode === 'light' ? 'white' : 'secondary'}`}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div
          className={`card-body text-${mode === 'light' ? 'black' : 'white'} `}
        >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small
              className={` text-${mode === 'light' ? 'black' : 'white'}  `}
            >
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
