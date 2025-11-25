import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className='bg-white tex-xxl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div className='flex justify-between'>
                <p className='text-shadow-2xs text-xl leading-5.5 text-white mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, enim nesciunt dolor ut labore accusantium.</p>
                <div>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-7 py-2 rounded-full text-lg'>{props.tag}</button>
                    <button className=' bg-blue-400 text-white font-semibold px-4 py-3 rounded-full text-lg'><i className="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent