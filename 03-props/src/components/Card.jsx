import React from 'react'

const Card = (props) => {

    console.log(props);
    console.log(props.user, props.age)
  return (
    <div>
        <div className="card">
        <img src={props.img} alt="" />
          <h1>{props.user} </h1>
          <h1>{props.age} years old.</h1>
          <h2>Programmer Analyst Trainee @Cognizant</h2>
          <button>View Profile</button>
       </div>
    </div>
  )
}

export default Card