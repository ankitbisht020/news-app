import React from "react";
import Newsitem from "./newsitem";
import { useEffect, useState } from "react";
import loading from "../asset/loading.spinnner.gif";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [page, setpage] = useState(1);
  const [response, setresponse] = useState("true");
  
  const API_KEY = process.env.REACT_APP_API_KEY;
 
  

  const updatenews = async () => {
    let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setresponse(false);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticle(parseddata.articles);
    setresponse(true);
  
  };
  useEffect(() => {
    updatenews();
  }, []);

  const fetchData = async () => {
  setpage(page+1);
    setresponse("false");
    console.log(response);
    let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(page);
    setresponse("true");
    setArticle(article.concat(parseddata.articles));
  };

  return (
    <>
      <div className="text-center ">
        {!response && <img src={loading} alt="loading page" />}
      </div>

      <InfiniteScroll
        dataLength={article.length+1}
        next={fetchData}
        hasMore={"loading"}
      >
        {
          <div className={` text-center container mt-5 `}>
            <h3 className={`text-${props.mode=='dark'?'white':'dark'}`}>Api service's is tempeorary interrupted , News can't by viewed category wise..</h3>
            <div className={`row `}>
              {response &&
                article.map((value) => (
                  <div className="col-md-4" >
                    
                    <Newsitem 
                      
                      mode={props.mode}
                      key={value.url}
                      title={value.title ? value.title.slice(0, 35) : ""}
                      desc={value.description ? value.description.slice(0, 88) : ""}
                      imageUrl={value.urlToImage}
                      newsurl={value.url}
                      author={value.author ? value.author.slice(0, 10):""}
                      date={value.publishedAt}
                      source={value.source.name}
                      
                    />
                  </div>
                ))}
            </div>
          </div>
        }
      </InfiniteScroll>
    </>
  );
}
