import React from "react";
import Newsitem from "./newsitem";
import { useEffect, useState } from "react";
import loading from "../asset/loading.spinnner.gif";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY = "r"; // Placeholder for your API key

  const updatenews = async () => {
    try {
      let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
      setResponse(false);
      setError(false); // Reset error before making the request

      let data = await fetch(url);
      if (!data.ok) throw new Error("Network response was not ok"); // Handle non-2xx responses
      let parsedData = await data.json();

      setArticle(parsedData.articles);
      setResponse(true);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(true); // Set error state when fetching fails
      setResponse(true); // Stop the loading spinner
    }
  };

  useEffect(() => {
    updatenews();
  }, []);

  const fetchData = async () => {
    try {
      setPage(page + 1);
      setResponse(false);
      let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      if (!data.ok) throw new Error("Network response was not ok");
      let parsedData = await data.json();

      setArticle(article.concat(parsedData.articles));
      setResponse(true);
    } catch (error) {
      console.error("Error fetching more news:", error);
      setError(true); // Set error state when fetching fails
      setResponse(true); // Stop the loading spinner
    }
  };

  return (
    <div className="mt-5">
      <div className="text-center">
        {!response && <img src={loading} alt="loading page" />}
      </div>

      {error ? (
        <h1 className="text-center">No news is available. Please try again later.</h1>
      ) : article.length === 0 ? (
        <div >
        <h1 className="text-center ">No news is available currently.</h1>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={article.length}
          next={fetchData}
          hasMore={true}
        >
          <div className={`text-center container mt-5`}>
            <h3 className={`text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
              Api service's are temporarily interrupted. News can't be viewed category-wise.
            </h3>
            <div className={`row`}>
              {response &&
                article.map((value) => (
                  <div className="col-md-4" key={value.url}>
                    <Newsitem
                      mode={props.mode}
                      title={value.title ? value.title.slice(0, 35) : ""}
                      desc={value.description ? value.description.slice(0, 88) : ""}
                      imageUrl={value.urlToImage}
                      newsurl={value.url}
                      author={value.author ? value.author.slice(0, 10) : ""}
                      date={value.publishedAt}
                      source={value.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
