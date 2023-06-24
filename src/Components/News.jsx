import React, {useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";



const News = (props) => {
  const [article , setArticle] = useState([]);
  const [loading , setloading] = useState(false);
  const [page , setpage] = useState(1);
  const [totalResults] = useState(1);


 
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&pageSize=${props.pageSize}`;
      setloading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setloading(false);
      setArticle(parsedData.articles);
      setArticle(parsedData.articles);
    };

    fetchNews();
  }, [props.pageSize]);



 
  const handleNextClick = async () => {
    
    if ((page + 1 > Math.ceil(totalResults /props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&page=${page + 1}&pageSize=${props.pageSize}`; 
      setloading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setloading(false);
      setpage(page + 1);
      setArticle(parsedData.articles);
      console.log("Next");
    }
  };

 const  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&page=${page - 1}&pageSize=${props.pageSize}`; 
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setloading(false);
    setpage(page - 1);
    setArticle(parsedData.articles);
  }

    return (
      <div className="container my-3">
         <h1  className="text-center">MonkeyNews - Top Headlines</h1>
          {loading && <Spinner/>}
        <div className="row">
          {!loading && article?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  className="card-img-top"
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.shutterstock.com/image-photo/global-business-structure-networking-analysis-260nw-2151657341.jpg"
                  }
                  newUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">

<button disabled={page<=1} className="btn btn-primary" onClick={handlePrevClick}>&larr; Previous</button>
<button disabled={!(page + 1 > Math.ceil(totalResults / props.pageSize))} className="btn btn-success" onClick={handleNextClick}>Next &rarr;</button>

</div>
      </div>
    );
  }


export default News
