import React from "react";
import { useGetApi } from "../hooks/useGetApi";
export const Home = () => {
  const { response, loading, error } = useGetApi("api/v1/product-info");

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      {response &&
        response.map((item) => {
          return (
            <div>
              <p>{item.title}</p>
              <img src={item.image} width="200" height="200" />
              <p>{item.description}</p>
            </div>
          );
        })}
    </>
  );
};
