import React, { useState } from 'react'
import { useContext } from 'react'
import { mainContext } from '../Context/MainContextAPI'
import Swal from 'sweetalert2'
const AddExpense = () => {
  const [isHide, setIsHide] = useState(true)
  const {allExpence,setAllExpense}=useContext(mainContext)
  const onsubmitHandler=(event)=>{
    try{
      event.preventDefault()
      const formData= new FormData(event.target)
      const price=formData.get("price")||0
      const description=formData.get("description")||''
      const purpose=formData.get("purpose")||''
      if(!description||price<=0||!purpose) {
        alert("please fill all details properly")
      return
    }
    const exp={
      price,
      description,
      purpose,
      created_at:new Date(),
      id:Date.now()  //generate a uniqueID 
    }
    const newExpence=[...allExpence,exp]

    setAllExpense(newExpence)
    localStorage.setItem("expence",JSON.stringify(newExpence))
  
 Swal.fire({
  title: 'Success!',
  text: 'Expence Deleted',
  icon: 'Success',
  confirmButtonText: 'OK'
})

    event.target.reset()
    setIsHide(true)


    }catch(error){
      console.error(error.message)
    }
  }
  return (
    <div>
    <div className='p-4'>
      <button onClick={()=>setIsHide(!isHide)}
      className='font-bold  p-4 bg-pink-600 rounded-xl'>
        {isHide?'Add+':'close'}
      </button>
    </div>
    {!isHide&& <div className='text-white'>
    <form onSubmit={onsubmitHandler}>
    <div className='my-2'>
      <label htmlFor='price'>Price(in rupee)</label>
      <input type='number' id='price' name='price' placeholder='Enter Your Price' 
      className='w-full border rounded py-3 my-3'/>
    </div>
    <div>
      <label htmlFor='description'>Enter the Description</label>
      <textarea type='number' id='description' name='description' placeholder='Enter the Description'
      className='w-full border rounded py-3 my-3'/>
    </div>
    <div>
      <label htmlFor='Purpose'>Purpose</label>
      <select name='purpose' id='purpose'
      className='w-full border py-3 my-3 bg-black rounded '>
        <option value='expense'>Expense</option>
        <option value='income'>Income</option>
      </select>
    </div>
    <div className='mb-3'>
      <button className='w-full font-bold rounded py-4 my-8 bg-pink-700'>Add Expenses</button>
    </div>
    </form>
    </div>}
    </div>
      
  
  )
}

export default AddExpense
