import React from 'react'


export default function Conditiontemp({id ,condition ,time ,img ,temp}) {
  return (
    <div id='slider' className='condition'>
        <div className='flex justify-center mt-2'>
            <img style={{width: '100px'}} src={img}></img>
        </div>
        <div>
            {condition}
        </div>
        <div className='mt-2'>
            <div>
                {temp} <i style={{fontSize: '2px'}} className='fa fa-circle'></i>
            </div>
            <div>
                {time}
            </div>
        </div>
    </div>
  )
}
