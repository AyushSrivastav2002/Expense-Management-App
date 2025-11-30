import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../Context/MainContextAPI'

const AllExpense = () => {
  const {allExpence}=useContext(mainContext)
  const totalMoney=allExpence.length>2 ?(
    allExpence.reduce((pre,cur)=>{
      return pre+parseInt(cur.price)
    },0)
  ):allExpence.length==1?allExpence[0].price:0
  
  const calCulateMoney=(purpose)=>{
    if(allExpence.length<=0){
      return 0
    }
    
    const expences=allExpence.filter((cur,i)=>cur.purpose
    ==purpose).map((cur)=>parseInt(cur.price))
     if(expences.length<=1){
      return expences[0]
     }
    const price=expences.reduce((pre,cur)=>pre+cur)
    return price;

  } 
  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-2 '>
        <div className='w-[96%] lg:w-[80%] px-5 py-3 mx-auto rounded border border-white'>
          <p className='font-bold text-2xl text-green-500'>Income</p>
          <p className='text-green-600 text-2xl font-bold text-end'>&#8377;
            {calCulateMoney('income')||0}
          </p>
        </div>
        <div className='w-[96%] lg:w-[80%] mx-auto px-5 py-3 rounded border border-white'>
          <p className='font-bold text-2xl text-red-500'>Expense</p>
          <p className='text-red-500 text-2xl font-bold text-end '>&#8377; 
            {calCulateMoney('expense')||0}
          </p>
        </div>
        <div className='col-span-2 py-5 px-2 rounded border border-white mt-4'>
        <p className='text-pink-500 font-bold'>Total Balance</p>
        <p className='text-red-400 text-end font-semibold'>&#8377;{totalMoney}</p>
        </div>
      </div>
      
    </div>
  )
}

export default AllExpense
