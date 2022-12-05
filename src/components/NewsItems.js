import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
      let {title , description , imageUrl , newsurl , author , date , source} = this.props;
    return (
      <div><div className="card" >
         <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{left:"85%",zIndex:"1"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-outline-dark">Read More</a>
        <p className="card-text my-2 "><small className="text-muted">By {author?author:"Unknown"} at {new Date(date).toGMTString()} </small></p>
      </div>
    </div></div>
    )
  }
}

export default NewsItems