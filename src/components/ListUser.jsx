import React, { useEffect, useState } from "react";
import "../styles/list.css";
import Image from "../assests/mobility.jpg"

const ListUser = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("credientials")));
  }, []);
  return (
    <div className="user_list">
        <img src={Image} alt="Image" />
      <div className="user">
        <h1>Details of the user</h1>
        <div className="card">
          <p className="data_details">
            Name : <span className="user_data">{data.username}</span>
          </p>
          <p className="data_details">
            Email :<span className="user_data">{data.email}</span>
          </p>
          <p className="data_details">
            Phone :<span className="user_data">{data.mobile}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
