import React, { useState, useEffect, useContext } from "react";
import Card from "../components/card";
import UserContext from "../context/UserContext";
export const Landing = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("")
  console.log(search)
  // const { setConData } = useContext(UserContext);
  const fetchData = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    
    setData(data);
    console.log(data)
    // setConData(data);
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container ">
      <h1 className="text-center text-success">Good Game theory Task</h1>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }} aria-label="Search"/>
      
        <div className="row w-100 mx-auto justify-content-center ">
          {data ? (
           data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map((i) => {
            console.log(i)
              return (
                <Card
                  datas={i}
                  name={i.name}
                  // runtime={i.show.runtime}
                  desc={i.description}
                  // generes={i.show.genres}
                  tag={i.tagline}
                  image={
                    i.image === null ? "not Found" : i.image_url
                  }
                  // language={i.show.language}
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
