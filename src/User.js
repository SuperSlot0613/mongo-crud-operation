import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    expiry: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    // const res = await axios.get(`http://localhost:9999/clubuser/${_id}`);
    const res=await axios({
      method: 'GET',
      url: 'http://localhost:9999/clubuser',
      data: {
      _id: id,
      }
    })
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {_id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user email: {user.email}</li>
        <li className="list-group-item">mobile: {user.mobile}</li>
        <li className="list-group-item">city: {user.city}</li>
        <li className="list-group-item">expiry: {user.expiry}</li>
      </ul>
    </div>
  );
};

export default User;
