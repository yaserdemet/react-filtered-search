import React from "react";

const Info = ({ item }) => {
  const { first_name, last_name, gender, email, avatar } = item;

  // console.log(item);
  return (
    <tr>
      <td>{first_name}</td>
      <td>{email}</td>
      <td>
        <img src={avatar} alt="" />
      </td>
      <td>{gender}</td>
    </tr>
  );
};

export default Info;
