import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users =[
    {
      img :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      color:'blue',
      tag :'Satisfied'

    },
    {
      img :'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      color:'violet',
      tag :'Underserved'
    },{
      img :'https://images.unsplash.com/photo-1762341115586-0f516a0964ee?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      color:'lightseagreen',
      tag :'Underbanked'
    },
    {
      img :'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'red',
      tag :'On Bench'
    },
    {
      img :'https://media.istockphoto.com/id/1746066866/photo/smiling-woman-using-digital-tablet-at-office.jpg?s=1024x1024&w=is&k=20&c=YLCvvxJa_mlEQt_FyO2iBVar6pD3iWsZiwmag1AQp_M=',
      intro : '',
      color:'lightpink',
      tag:'Hiring'
    }
  ]
  return (
    <div>   
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App