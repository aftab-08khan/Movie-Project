import React from "react";
import "./style.scss";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner/DetailsBanner";
import Cast from "./Cast/Cast";
import VideosSection from "./VideosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommended";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <>
      <div>
        <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
        <Cast data={credits?.cast} loading={creditLoading} />
      </div>
      <VideosSection data={data} loading={loading} />
      <Recommendation mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
