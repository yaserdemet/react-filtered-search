import React from "react";
import { motion} from "framer-motion";
import { data } from "../helpers/data.jsx";

const Info = ({ item }) => {
  const { first_name, last_name, gender, email, avatar } = item;

  // console.log(item);


  return (
    <motion.tr
    whileHover={{scale : 0.9 , originX : 0 , color : "#f8e112"}}
    transition={{type : "spring" , stiffness : 100}}
    >
      <td>{first_name}</td>
      <td>{email}</td>
      <td>
        <img src={avatar} alt="" />
      </td>
      <td>{gender}</td>
  
    </motion.tr>
  );
};

export default Info;
