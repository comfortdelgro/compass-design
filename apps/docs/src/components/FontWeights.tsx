import React from 'react'

const FontWeights: React.FC = () => {
  const weights = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  }

  return (
    <div className='flex flex-row mt-5 gap-2 flex-wrap'>
      {Object.entries(weights).map(([name, weight]) => (
        <div
          key={name}
          className='border-2 border-solid border-gray-200 flex-shrink-0 w-36 h-24 font-poppins flex flex-col items-center justify-end p-3'
          style={{fontWeight: weight}}
        >
          <div className='text-2xl text-[#080C4E]'>Aa</div>
          <div className='h-2'></div>
          <div className='text-sm capitalize'>{name}</div>
        </div>
      ))}
    </div>
  )
}

export default FontWeights
