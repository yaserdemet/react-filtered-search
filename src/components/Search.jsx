import React from "react";
import { useGlobalContext } from "../contexApi/Context";
import { useRef, useEffect } from "react";
import { data } from "../helpers/data";
const Search = () => {
  const { search, setSearch } = useGlobalContext();
  const {dataa , setDataa} = useGlobalContext()

    // console.log(dataa.length)
//   console.log(search);

    const myRef = useRef()

    useEffect(() => {

        myRef.current.focus()

    } , [])

  return (
    <div className="mt-5 mb-4 w-25 container">
      <div class="form-floating-small mb-3">
        <h3>Personel Information</h3>
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
    </div>
  );
};

export default Search;
