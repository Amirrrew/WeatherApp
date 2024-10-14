import React from 'react'
import { useState } from 'react'

let Datas = [
  {day: 'Sunday' ,Condition: 'Sunny' ,htemp: 27 ,ltemp: 19 ,icon: '../images/Sunny-icon.png'},
  {day: 'Monday' ,Condition: 'Partly Sunny' ,htemp: 24 ,ltemp: 17,icon: '../images/partly-icon.png'},
  {day: 'Tuesday' ,Condition: 'Rainy' ,htemp: 22 ,ltemp: 15,icon: '../images/rainy-icon.png'},
  {day: 'Wednesday' ,Condition: 'Partly Sunny' ,htemp: 25 ,ltemp: 21,icon: '../images/partly-icon.png'},
  {day: 'Thursday' ,Condition: 'Rainy' ,htemp: 20 ,ltemp: 18,icon: '../images/rainy-icon.png'},
  {day: 'Friday' ,Condition: 'Rainy' ,htemp: 21 ,ltemp: 16,icon: '../images/rainy-icon.png'},
  {day: 'Saturday' ,Condition: 'Rainy' ,htemp: 21 ,ltemp: 17,icon: '../images/rainy-icon.png'}
]

let NxtDays = ({day ,Condition ,htemp ,ltemp ,icon}) => {
  return (
    <div className='Days'>
      <div className='flex'>
        <img className='mt-3' src={icon}></img>
        <div className='mt-3 mx-4'>
          <div className='text-gray-400'>
            {day}
          </div>
          <div className='text-xl'>
          {Condition}
          </div>
        </div>
      </div>
      <div className='flex gap-1 mt-7'>
        <div className='text-blue-300'> {htemp}</div>
        <div> / </div>
        <div className='text-red-300'> {ltemp}</div>
      </div>
    </div>
  )
}

export default function MoreDays() {
  let [post ,setPost] = useState(Datas);
  return (
    <div className='big-box'>
      <div className='mx-3'>
        Next 7 Days
      </div>
      <div className='mt-3'>
        {post.map(item => {
          return <NxtDays day={item.day} icon={item.icon} Condition={item.Condition} htemp={item.htemp} ltemp={item.ltemp}></NxtDays>
        })}
      </div>
    </div>
  )
}
