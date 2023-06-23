import React from 'react'

const NewsItem = (props) => {
    let {title , description , imageUrl, newUrl} = props
    return (

      <div className="container my-3">
              <div className="card cards1"   style={{ width: "18rem"}}>
      <img className='images' src={imageUrl} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}....</h5>
        <p className="card-text">{description}....</p>
        <a  rel="noreferrer" href={newUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>
    </div>

    )
  }
  export default NewsItem

