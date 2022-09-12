import React from 'react'

const Info = ({item}) => {

    const {first_name ,  last_name} = item
    
    console.log(item)
  return (
    <div>
      
      <tr>
            <th scope="row">{first_name}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
    </div>
  )
}

export default Info