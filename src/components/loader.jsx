import React from 'react'
import { Bars } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className=' w-full h-screen bg-gradient-to-br from-[#000000] to-[#04619F] flex flex-col items-center justify-center z-20' >
  <Bars 
  height="80"
  width="80"
  color="white"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  
/>

<span className='text-white py-3' >Loading...</span>
    </div>
  )
}


export default Loader