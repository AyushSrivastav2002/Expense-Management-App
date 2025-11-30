import React, { useContext } from 'react'
import { mainContext } from '../Context/MainContextAPI'
import ExpenceCard from './ExpenceCard'

const ListExpense = () => {
  const{allExpence}= useContext(mainContext)
  return (
    <div>
      <table className='w-full border text-white table-auto my-8'>
        <tbody>
          <tr>
          <th className='border'>No</th>
          <th className='border'>Price</th>
          <th className='border'>Description</th>
          <th className='border'>Purpose</th>
          <th className='border'>Action</th>
        </tr>
        </tbody>
        
        <tbody>{
          allExpence && allExpence.length>0?<>
          {
            allExpence.map((cur,i)=>{
              return <ExpenceCard data={cur} no={i+1} key={i}/>

            })
          }
          </>:<></>
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default ListExpense
