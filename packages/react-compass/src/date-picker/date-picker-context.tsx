import React, {createContext, useContext, useState} from 'react'

const DatePickerContext = createContext<{
  isReset?: boolean
  setIsReset?: (value: boolean) => void
}>({})

const DatePickerProvider = ({children}: {children: React.ReactNode}) => {
  const [isReset, setIsReset] = useState(false)

  return (
    <DatePickerContext.Provider
      value={{
        isReset,
        setIsReset,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  )
}

export const useDatePickerContext = () => {
  return useContext(DatePickerContext)
}

export default DatePickerProvider
