import React from "react";
import { data } from "../helpers/data.jsx";
import { useEffect, useState, useRef } from "react";
import Info from "./Info.jsx";
import { useGlobalContext } from "../contexApi/Context";
import Pagination from "./Pagination.jsx";
import Tippy from '@tippyjs/react';
import { motion, useScroll, useSpring } from "framer-motion";


const Table = ({ isVisible }) => {
  const myRef = useRef();
  const { search, setSearch } = useGlobalContext();
  const { dataa, setDataa } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const lastPost = currentPage * perPage;
  const firstPost = lastPost - perPage;
  const currentPost = data.slice(firstPost, lastPost);

  const pageNumbers = [];

  
  // console.log(currentPost);

  const paginate = (pageNUmber) => {
    
  
    setCurrentPage(pageNUmber);
    if(pageNUmber == "Next Page"){
      setCurrentPage(currentPage  + 1)
    }
    else if (pageNUmber == "Previous Page"){
      setCurrentPage(currentPage - 1)
    }
      if(currentPage == pageNumbers.length-1) {
        pageNumbers.unshift()
      }
  };

  useEffect(() => {
    // console.log("myref have worked", myRef.current);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // console.log(data.filter(item => item.first_name.toLowerCase().includes("ar")));

 

  return (
    
      <motion.div
      
        className="w-75  m-auto "
        initial={{ x: "-100vw" }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        animate={{ x: 0, opacity: 1 }}
        
      >
       
      
        <Pagination
          perPage={perPage}
          totalPosts={data.length}
          paginate={paginate}
          pageNumbers={ pageNumbers}
          currentPage={currentPage}
        />

        <table className="table table-dark table-striped " id="x">
          <thead>
            <Tippy style={{
              followCursor : true
            }} content={<span>Personel Information</span>}>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
                <th scope="col">Email</th>
              </tr>
            </Tippy>
          </thead>
          <tbody ref={myRef}>
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
                  return <Info key={index} item={item} />;
                })
            )}
          </tbody>
        </table>
      
      </motion.div>
      
      
    
  );
};

export default Table;
