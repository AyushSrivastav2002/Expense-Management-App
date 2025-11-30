import React, { useContext } from 'react'
import { mainContext } from '../Context/MainContextAPI'
import Swal from 'sweetalert2'
const ExpenceCard = ({data,no}) => {
    const {allExpence,setAllExpense}=useContext(mainContext)
    const deleteExpence=(id)=>{
        const newExpence=allExpence.filter((cur,i)=>cur.id!=data.id)
        setAllExpense(newExpence)
          
        Swal.fire({
  title: 'Success!',
  text: 'Expence Deleted',
  icon: 'Success',
  confirmButtonText: 'OK'
})

localStorage.setItem("expence",JSON.stringify(newExpence))



    }
  return (

        
        <tr className='text-white'>
            <td className='border text-white p-2 font-bold'>{no}</td>
            <td className='border text-white p-2 font-bold'>&#8377;{data.price}</td>
            <td className='border text-white p-2 '>{data.description}</td>
            <td className={'border text-white text-center p-2'}>
                {data.purpose=='expense' && <span className=' text-red-500 bg-red-300 rounded font-bold'>{'Expense'}</span>}
                {data.purpose=='income'&&<span className=' text-green-400 bg-green-200 rounded font-bold'>{'Income'}</span>}
                </td>
            <td className='border text-white p-2'>
                <button onClick={deleteExpence} className='border  bg-red-500 text-white font-semibold text-center rounded py-1 px-1'>Delete</button>
            </td>
        </tr>
        
      
    
  )
}

export default ExpenceCard
