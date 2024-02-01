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
        <img className="card-img-top" src={props.image} alt={props.image} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Runtime:{props.runtime}</p>
          <p className="card-text">Generes:{props.generes}</p>
          <p className="card-text">Language:{props.language}</p>
          <Link
           
            to="/description"
            className="btn btn-primary"
            onClick={setContext}
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}
