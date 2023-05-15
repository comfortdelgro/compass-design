const FontWeights: React.FC = () => {
  const weights = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1.25rem',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      {Object.entries(weights).map(([name, weight]) => (
        <div
          key={name}
          style={{
            border: '2px solid rgb(229 231 235)',
            flexShrink: 0,
            width: '9rem',
            height: '6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0.75rem',
            fontWeight: weight
          }}
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
