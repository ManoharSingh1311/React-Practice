import React from 'react'

const App = () => {

  // function inputChanging(val)
  // {
  //   console.log(val);
  // }
  const pageScrolling = (elem)=>{
    if(elem > 0){
      console.log(' speed', elem);
    }
    else{
      console.log('negative scrolling')
    }
    
  }


  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY);
    }}>
      {/* <h1>Manohar Singh</h1>
      <button onClick={()=>{
        console.log("Button is Clicked!");
        }}>Change User</button> */}

        {/* <input onChange={(elem)=>{
          inputChanging(elem.target.value);
        }} type="text" placeholder='Enter Your Name' />
 */}
        {/* <div onMouseMove={(elem)=>{
          console.log(elem.clientX);
        }} className="box"> */}

          <div className="page1"></div>
          <div className="page2"></div>
          <div className="page3"></div>
          

    </div>
  )
}

export default App