import React from 'react'

function Signin() {
  return (
    <div className=''>
        <div className='w-full grid justify-items-end'>
        <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        </a>
        </div>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
      <div>
      <input className='border-2 my-8'  type="text" placeholder='insert dei' required /> 
      </div>
      <div>
        <button className='border-2'> Click !</button>
      </div>
    </div>
  )
}

export default Signin