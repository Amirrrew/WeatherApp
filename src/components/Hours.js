import React from 'react'
import { useState } from 'react'
import Conditiontemp from './Condition-temp';

let Datas = [
    {id: 0 ,condition: 'Sunny' ,time: '14:00',temp: 24 , img: '../images/sunny-icon.png'},
    {id: 1 ,condition: 'Sunny' ,time: '15:00',temp: 23 , img: '../images/sunny-icon.png'},
    {id: 2 ,condition: 'Sunny' ,time: '16:00',temp: 25 , img: '../images/sunny-icon.png'},
    {id: 3 ,condition: 'Cloudy' ,time: '17:00',temp: 23 , img: '../images/cloudy-icon.png'},
    {id: 4 ,condition: 'Cloudy' ,time: '18:00',temp: 22 , img: '../images/cloudy-icon.png'},
    {id: 5 ,condition: 'Rainy' ,time: '19:00',temp: 20 , img: '../images/rainy-icon.png'},
    {id: 6 ,condition: 'Rainy' ,time: '20:00',temp: 17 , img: '../images/rainy-icon.png'},
]

export default function Hours() {
    let [post ,setPost] = useState(Datas);
  return (
    <div id='main2' className='main mt-5'>
        <div className='flex justify-between'>
            <div>
                Next 7 Hours
            </div>
        </div>
        <div id='prd-slider' className='Scroller flex mt-6 gap-3'>
            {post.map(item => {
                return <Conditiontemp condition={item.condition} img={item.img} temp={item.temp} time={item.time}></Conditiontemp>
            })}
        </div>
    </div>
  )
}
