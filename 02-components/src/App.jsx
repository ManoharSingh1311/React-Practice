import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';

const App = () => {

  let user = 'Mannu';
  return (
    <div>
      <div className='card'>
      <h1>{user} Singh</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt possimus sequi assumenda voluptates incidunt aperiam autem, in esse porro numquam veniam accusantium molestias corporis. Fuga, molestias deleniti. Quis, voluptas aperiam?
      Cum veniam deleniti tempora aliquam sequi vitae in nam rem consequuntur aperiam odio ut officia sunt asperiores, animi est iure quia velit, obcaecati possimus? Unde tenetur modi porro adipisci quasi.</p> 
      </div>

      {Card()}
      {Navbar()}
    </div>
  )
}

export default App