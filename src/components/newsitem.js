import React from 'react'
import logo from '../asset/logo2.jpg';

export default function Newsitem(props) {
  
    // let {title, desc, imageUrl,newsurl,author,date, source, mode}=props;
    return (
        <>
        <div className={`card text-start  my-5 text-${props.mode=='dark'?'white':'dark'} bg-${props.mode!=='dark'?'white':'secondary'}`} style={{height: 420, width:400}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:1}}>{props.source}</span>
        <img src={!props.imageUrl?logo:props.imageUrl}className="card-img-tofp height=5" alt='image is not availabe' style={{height: 200, objectFit:'cover'}}/>
        <div className="card-body">
          <h5 className="card-title">{props.title} ...</h5>
          <p className="card-text">{props.desc} ...</p>33
          <p className="card-text"><small>By {!props.author?"Unknown":props.author} on {props.date}</small></p>
          <a href={props.newsurl} className={`btn btn-secondary bg-${props.mode=='dark'?'primary':'secondary'}`} target="_blank">View page source</a>
        </div>
       
      </div>
      
      </>
    )
  }

