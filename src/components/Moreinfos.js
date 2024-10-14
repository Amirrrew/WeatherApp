import React from 'react'
import { useState } from 'react'

let Dets = ({icon ,title ,cond}) => {
    return (
        <div className='detail'>
            <i className={icon}></i>
            <div className='mt-1'>
                <div className='text-gray-400 text-sm'>
                    {title}
                </div>
                <div className='text-xl'>
                    {cond}
                </div>
            </div>
        </div>
    )
}

let DetList = [
    {icon: 'fa fa-thermometer-0 fa-2x mt-3' ,title: 'Real feel' ,cond: '28 Deg'},
    {icon: 'fa fa-wind fa-2x mt-3' ,title: 'Wind Speed' ,cond: '3 km/h'},
    {icon: 'fa fa-cloud fa-2x mt-3' ,title: 'AQI' ,cond: 'Moderate'},
    {icon: 'fa fa-sun fa fa-2x mt-3' ,title: 'UV Index' ,cond: 'Low'},
    {icon: 'fa fa-circle fa-2x mt-3' ,title: 'Sunrise' ,cond: '5:32'},
    {icon: 'fa fa-star fa-2x mt-3' ,title: 'Sunset' ,cond: '17:40'},
    {icon: 'fa fa-tint fa-2x mt-3' ,title: 'Humidity' ,cond: '43%'},
    {icon: 'fa fa-certificate fa-2x mt-3' ,title: 'Pollen' ,cond: 'None'},
    {icon: 'fa fa-heart fa-2x mt-3' ,title: 'Running' ,cond: 'Poor'},
    {icon: 'fa fa-leaf fa-2x mt-3' ,title: 'Condition' ,cond: 'Good'},
]


export default function MoreInfo() {
    let [post ,setPost] = useState(DetList);
  return (
    <div className='big-box'>
        <div>
            More Details
        </div>
        <div className='flex flex-wrap mt-7 gap-3'>
            {post.map(item => {
                return <Dets icon={item.icon} title={item.title} cond={item.cond}></Dets>
            })}
        </div>
    </div>
  )
}
