import React from 'react'
import { Bars } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-blue-900 via-black-500 to-blue-500 flex flex-col items-center justify-center z-10' >
  <Bars
  height="80"
  width="80"
  color="white"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
<span className='text-white py-3' >Loading....</span>
    </div>
  )
}


export default Loader