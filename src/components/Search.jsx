import React, { useState } from "react";
import { useGlobalContext } from "../contexApi/Context";
import { useRef, useEffect } from "react";
import { data } from "../helpers/data";
import { motion } from "framer-motion";
import useReading from "../hooks/useReading";
const Search = () => {
  const { search, setSearch } = useGlobalContext();
  const { dataa, setDataa } = useGlobalContext();
  const completion = useReading()
  

  // console.log(dataa.length)
  //   console.log(search);

  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <>
    <div className="progress position-top fixed-top" >
  <div className="progress-bar progress-bar-striped bg-warning  py-2" role="progressbar" aria-label="Info striped example" style={{width: "110%" , transform : `translateX(${completion-100}%)`}}  aria-valuemin="0"></div>
</div>
    <motion.div
      className="mt-5 mb-4 w-25 container"
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      initial={{ y: "-100vh", opacity: "0.1" }}
      animate={{ y: 0, opacity: "1" }}
    >
      <div className="form-floating-small mb-3">
        <motion.h3
          drag
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          dragElastic={0.5}
        >
          Personel Information
        </motion.h3>
        <input
          ref={myRef}
          type="search"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="floatingInput"
          placeholder="Enter what you want to search"
        />
        {/* <p>
    {   
            dataa?.filter((item) => !(item.first_name.toLowerCase().includes(search) && !search)  && "dawd"
            )
    }
</p> */}
      </div>
    </motion.div>
    </>
  );
};

export default Search;
