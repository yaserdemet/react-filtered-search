import React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Pagination = ({ perPage, totalPosts, paginate , pageNumbers }) => {
    const [animationParent] = useAutoAnimate()

    for(let i=1; i  <  Math.ceil(totalPosts / perPage); i++){
        pageNumbers.push(i)
    }
    pageNumbers.push("Next Page")
    pageNumbers.unshift("Previous Page")
  return (
    <div>
        <nav >
            <ul  className='pagination'>
          

                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a className="page-link bg-dark text-light" onClick={() => paginate(number)} href="#">
                                {number}
                            </a>
                            
                            
                        </li>
                    )
                    
                    )
                    
                }

               

            
                
            </ul>
        </nav>

    </div>
  )
}

export default Pagination