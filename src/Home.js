import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9999/club");
    setUser(result.data.reverse());
  };

  const deleteUser = async _id => {
    // await axios.delete(`http://localhost:9999/club`,_id);
    return await axios({
      method: 'DELETE',
      url: 'http://localhost:9999/club',
      data: {
      _id: _id,
      }
    })
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">City</th>
              <th scope="col">Expiry</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.city}</td>
                <td>{user.expiry}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
