import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetching = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const url = await axios.get("https://jsonplaceholder.typicode.com/users");
    const response = await url.data;
    setUsers(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <table style={{textAlign:"center"}}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
          {/* <tr> */}
            {users.length > 0
              ? users.map((user) => {
                  const { id, name, email, username, address, company } = user;
                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{name}</td> 
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{company.name} </td>
                      <td>{address.city}</td>
                    </tr>
                  );
                })
              : "no data is available"}
          {/* </tr> */}
        </table>
      </div>
    </>
  );
};

export default DataFetching;

//promises  -- es6 => it will handle asynchrounous tasks
// async-await  --es7   ==> it will handle asynchrounous tasks
