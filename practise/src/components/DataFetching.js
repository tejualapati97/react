import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetching = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("")

  const fetchData = async () => {
    const url = await axios.get("https://jsonplaceholder.typicode.com/users");
    const response = await url.data;
    setUsers(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  ////// data filtering /////////////
let filterData= users.filter((user)=>{
  return user.email.toUpperCase().includes(filterText.toUpperCase())
})

  return (
    <>
    <div>
        <input type="text" name="filterText" value={filterText} placeholder="search by name" onChange={(e)=> setFilterText(e.target.value)} />
    </div>
    <br/>
      <div>
        <table style={{textAlign:"center" }}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
          {filterData?.length > 0
            ? filterData?.map((user) => {
                const { id, name, email, username, address, company } = user;
                return (
                  <tr key={id}>
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
        </table>
      </div>
    </>
  );
};

export default DataFetching;

//promises  -- es6 => it will handle asynchrounous tasks
// async-await  --es7   ==> it will handle asynchrounous tasks
