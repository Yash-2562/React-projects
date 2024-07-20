import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title,  imageurl, newsUrl} = this.props;
    return (
      <div className=' container  my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
            <h5 className="card-title">{title} </h5>
            
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
