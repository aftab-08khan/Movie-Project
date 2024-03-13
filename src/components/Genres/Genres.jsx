import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const Genres = ({ data }) => {
  // console.log("data", data);
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g) => {
        {
          /* console.log("g", g); */
        }
        if (!genres[g]?.name) return;
        return (
          <div className="genre" key={g}>
            {genres[g].name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
