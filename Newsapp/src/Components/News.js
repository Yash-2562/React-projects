import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {

  articles=  [
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
  
    this.state = {
      articles: this.articles,
      loading: false,
      page:1
      
    }
  }
   async componentDidMount() {
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4168673c744f418cbe59d537928fb290"
     let data = await fetch(url);
     let parseddata= await data.json()
     console.log(parseddata)
     this.setState({articles:parseddata.articles})
  }
  handleNextclick = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4168673c744f418cbe59d537928fb290&page=${this.state.page + 1}`
     let data = await fetch(url);
     let parseddata= await data.json()
     console.log(parseddata)
    this.setState({
      page: this.state.page + 1,
      articles:parseddata.articles
    })
  }
  handlePrevclick = async()=> {
    console.log("hii")
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4168673c744f418cbe59d537928fb290&page=${this.state.page - 1}`
     let data = await fetch(url);
     let parseddata= await data.json()
     console.log(parseddata)
    this.setState({
      page: this.state.page - 1,
      articles:parseddata.articles
    })
  }



  render() {
    return (
      <><div className='container  my-3'>
        <h2 className='text-center'>NowStory-Top Headlines</h2>
   
        <div className="row">
        {this.state.articles.map((e) => {
        return <div className='col-md-4' key={e.url}>
        <NewsItem title={e.title} imageurl={e.urlToImage} newsUrl={e.url} />

      </div>
            

          })}
          </div>


      </div><div className="container d-flex justify-content-between  ">
          <button type="button" class="btn btn-dark mx-3 mb-5 " disabled={this.state.page<=1} onClick={this.handlePrevclick}> &larr;Previous</button>
          <button type="button" class="btn btn-dark mb-5" disabled={this.state.page>3} onClick={this.handleNextclick}>Next &rarr;</button>
        </div></> 
      
    )
  }
}

export default News
