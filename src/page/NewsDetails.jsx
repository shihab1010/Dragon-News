import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Rightaside from "../components/Homelayout/Rightaside";
import NewsDetailsCard from "../components/NewsdetailsCard/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id, data);
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsDetails = data.find((newsEach) => newsEach.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto mt-5 grid grid-cols-12">
        <section className="col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <Rightaside></Rightaside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
