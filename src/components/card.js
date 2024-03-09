import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Card(props) {
  const { setConData } = useContext(UserContext);
  const setContext = () => {
    setDesc(props.desc);
    setConData(props.datas);
  };
  const { setDesc } = useContext(UserContext);
  return (
    <div className="col-lg-3 p-2 col-md-6 col-sm-6 justify-content-center justify-around">
      <div className="card text-center p-2" style={{ width: "18rem" }}>
        <img style={{height:"300px",width:"150px" ,margin:"0 auto"}} className="card-img-top h-150px w-150px" src={props.image} alt={props.image} />
        <div className="card-body">
          <h5 className="card-title"><b>Name:</b> {props.name}</h5>
          <p className="card-text"><b>TagLine: </b>{props.tag}</p>
          {/* <p className="card-text">Runtime:{props.runtime}</p>
          <p className="card-text">Generes:{props.generes}</p> */}
          <p className="card-text"><b>Description: </b>{props.desc}</p>

          
        </div>
      </div>
    </div>
  );
}
