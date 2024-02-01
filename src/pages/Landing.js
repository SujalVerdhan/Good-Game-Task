import React, { useState, useEffect, useContext } from "react";
import Card from "../components/card";
import UserContext from "../context/UserContext";
export const Landing = () => {
  const [data, setData] = useState([]);
  const { setConData } = useContext(UserContext);
  const fetchData = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await res.json();
    setData(data);
    setConData(data);
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container ">
      <h1 className="text-center text-success">QuadB Tech Task</h1>
        <div className="row w-100 mx-auto justify-content-center ">
          {data ? (
            data.map((i) => {
              return (
                <Card
                  datas={i}
                  name={i.show.name}
                  runtime={i.show.runtime}
                  desc={i.show.summary}
                  generes={i.show.genres}
                  image={
                    i.show.image === null ? "not Found" : i.show.image.medium
                  }
                  language={i.show.language}
                />
              );
            })
          ) : (
            <div>hello</div>
          )}
        </div>
      </div>
    </>
  );
};
