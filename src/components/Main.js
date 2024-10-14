import React from 'react'

export default function Main() {
  return (
    <div id='main' className='main gap-20'>
        <div>
            <div>
                Quemshahr ,Mazandaran ,Iran 
            </div>
            <div id='info' className='flex justify-between mt-3'>
            <div>
                <div className='flex'>
                    <div className='text-9xl mt-9'>23</div> <i class="fa fa-circle mt-3" aria-hidden="true"></i>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <div className='mx-2 text-lg'>
                            Sunny
                        </div>
                        <div className='mx-2 text-lg'>
                            <span className='text-blue-300'>14 /</span> <span className='text-red-300'>27</span>
                        </div>
                    </div>
                    <a href='https://weather.com/weather/today/l/555bfbfc8375a20bcc5bcb1567d61999ed072516ba845b5d04812c99f028568e'>
                        <button className='btn mt-1'>
                            More info <i className='fa fa-angle-right'></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </div>
        <div>
            <img className='mt-10' id='weather' style={{width: '200px'}} src='./images/sunny-icon.png'></img>
        </div>
    </div>
  )
}
