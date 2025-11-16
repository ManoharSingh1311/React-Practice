import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
       <Card user='Manohar Singh' age ={18} img='https://plus.unsplash.com/premium_photo-1762560039194-ddc15f00b18e?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Neeraj Singh' age ={16} img ='https://images.unsplash.com/photo-1755655282628-633964d95570?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Satyam Sharma' age ={17} img ='https://images.unsplash.com/photo-1761632046628-db5195c5164d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    
    </div>

  )
}

export default App