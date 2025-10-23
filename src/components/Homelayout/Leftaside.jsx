import React, { Suspense } from "react";
import Categories from "../categories/Categories";

const Leftaside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-md"></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default Leftaside;
