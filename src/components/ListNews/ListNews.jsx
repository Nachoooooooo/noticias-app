import React from "react";
import axios from 'axios';
import myNews from './news.json';

const newsURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=I9AlSAUoiAStMBNvOMw4v4Z78tL91FQz";
const imgBaseUrl = "http://www.nytimes.com/";


export default function ListNews() {
  const [news, setNews] = React.useState(null);


  React.useEffect(() => {
    axios.get(newsURL).then((response) => {
      setNews(response.data);
    });
  }, []);

  if (!news) return null;

  return (
    <div>
   Loading News
   <ul>
   {
    (myNews.response.docs.concat(news.response.docs)).map((doc, index)=>(
      <div key={index}>
      <img src={imgBaseUrl+doc.multimedia[0].url} alt="imagen"></img>
      <li>{doc.abstract}</li>
      <li>{doc.web_url}</li>
      <button id="add-button">Eliminar</button>

      </div>))

      

   }
   </ul>
    </div>
  );
}



