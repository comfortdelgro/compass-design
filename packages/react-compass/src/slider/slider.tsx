import React, {useState} from 'react'
import './styles.css'

interface SliderProps {
  color: string
  min: number
  max: number
  value?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Slider: React.FunctionComponent<SliderProps> = ({
  color,
  min,
  max,
  value,
  onChange,
}) => {
  const [background, setBackground] = useState(
    `linear-gradient(to right, ${color} 0%, ${color} ${value}%, #fff ${value}%, white 100%)`,
  )

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    const valBg = ((Number(val) - min) / (max - min)) * 100
    setBackground(
      `linear-gradient(to right, ${color} 0%, ${color} ${valBg}%, #fff ${valBg}%, white 100%)`,
    )
    onChange(e)
  }

  return (
    <input
      type='range'
      min={min}
      max={max}
      value={value}
      data-color={color}
      className='range-slider'
      onChange={handleOnChange}
      style={{background}}
    />
  )
}

export default Slider
