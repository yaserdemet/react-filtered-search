import React from "react";
import {data} from "../helpers/data.jsx";
import { useEffect, useState } from "react";
import Info from "./Info.jsx";

const Table = () => {
    const [dataa , setDataa] = useState()
    useEffect(() => {
        setDataa(data)
    } , [])
    // console.log(dataa);
  return (
    <div className="w-75  m-auto">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            
            <th scope="col">FirstName</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
      
          {
            data.map((item,index) => {
                return (
                    

                        <Info  item={item} />

                    
                )
            })
          } 

        </tbody>
      </table>
    </div>
  );
};

export default Table;
