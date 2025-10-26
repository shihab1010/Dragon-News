import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  // Format date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card w-full bg-base-100 shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        <figure className="mb-3">
          <img
            src={thumbnail_url}
            alt="thumbnail"
            className="w-full h-52 object-cover rounded-md"
          />
        </figure>

        <p className="text-gray-600 text-sm mb-2">
          {details.slice(0, 150)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">
            Read More
          </Link>
        </p>

        <div className="text-xs text-gray-500 mb-3">
          Tags:{" "}
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 px-2 py-0.5 rounded-md mr-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 bg-base-200 pb-4">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="font-semibold text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
