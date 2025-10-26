import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="p-5 rounded-lg space-y-3">
      <img
        className=" rounded-xl w-full h-[400px]"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-3xl  font-bold">{news.title}</h2>
      <p>{news.details}</p>
      <Link
        className="btn btn-secondary px-8 text-white py-3"
        to={`/category/${news.category_id}`}
      >
        {" "}
        <FaArrowLeftLong></FaArrowLeftLong> All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
