import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary p-3">Latest</p>
      <Marquee pauseOnHover={true}>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
