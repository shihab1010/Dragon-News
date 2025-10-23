import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Newscard from "../components/newsCard/Newscard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id,data);
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      // console.log(filteredData);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold"> <span className="text-secondary">{categoryNews.length}</span> CategoryNews Found</h2>
      <div className="grid grid-cols-1 gap-5 my-3 mx-2">
        {
          categoryNews.map(news=> <Newscard id={news.id} news={news}></Newscard>)
        }

      </div>
    </div>
  );
};

export default CategoryNews;
