import React from 'react'
import Navbar from './Components/Navbar'
import AddExpense from './Components/AddExpense'
import AllExpense from './Components/AllExpense'
import ListExpense from './Components/ListExpense'
const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <Navbar/>
      <main className='w-[80%] mx-auto'>// main tag ka use kre h isko customize aur SEO friendly bnane k liye.
      <AddExpense/> 
      <AllExpense/>
      <ListExpense/>
      </main>
    </div>
  )
}

export default App


