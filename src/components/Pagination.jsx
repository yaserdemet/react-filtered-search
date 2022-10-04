import React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Pagination = ({ perPage, totalPosts, paginate , pageNumbers, currentPage }) => {
    const [animationParent] = useAutoAnimate()

    for(let i=1; i  <  Math.ceil(totalPosts / perPage); i++){
        pageNumbers.push(i)
    }
    pageNumbers.push("Next Page")
    pageNumbers.unshift("Previous Page")

    if(currentPage == 1){
        pageNumbers.shift()
    }

    if(currentPage == pageNumbers.length -1){
        pageNumbers.pop()
    }

  return (
    <div>
        <nav >
            <ul  className='pagination'>
          

                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button    className="page-link bg-dark text-light" onClick={() => paginate(number)} href="#">
                                {number}
                            </button>
                            
                            
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