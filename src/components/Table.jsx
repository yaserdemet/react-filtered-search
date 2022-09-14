import React from "react";
import { data } from "../helpers/data.jsx";
import { useEffect, useState } from "react";
import Info from "./Info.jsx";
import { useGlobalContext } from "../contexApi/Context";
import Pagination from "./Pagination.jsx";

const Table = () => {
  const { search, setSearch } = useGlobalContext();
  const { dataa, setDataa } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [currentPage , setCurrentPage] = useState(1)
  const [perPage , setPerPage] = useState(10)

  
   const lastPost = currentPage * perPage;
   const firstPost = lastPost - perPage;
   const currentPost = data.slice(firstPost , lastPost)
  console.log(currentPost);

  const paginate = (pageNUmber) => {
    setCurrentPage(pageNUmber)

  }

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // console.log(data.filter(item => item.first_name.toLowerCase().includes("ar")));

 

  return (
    <div className="w-75  m-auto">
        <Pagination   perPage={perPage} totalPosts={data.length} paginate={paginate} />

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
          {loading ? (
            <img
              src="https://media4.giphy.com/media/y1ZBcOGOOtlpC/200w.gif?cid=82a1493bem0az1l41hp8qcwf04bjg0i7285r6484zz5m7gno&rid=200w.gif&ct=g"
              width="300px"
              style={{ marginLeft: "15rem" }}
              alt=""
            />
          ) : (
            currentPost
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => {
                return <Info  key = {index} item={item} />;
              })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
