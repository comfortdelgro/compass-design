import React, {createContext, useContext, useState} from 'react'

const DatePickerContext = createContext<{
  isReset?: boolean
  setIsReset?: (value: boolean) => void
}>({})

const DatePickerProvider = ({children}: {children: React.ReactNode}) => {
  const [isReset, setIsReset] = useState(false)

  return (
<<<<<<< HEAD
    <DatePickerContext.Provider value={{isReset, setIsReset}}>
=======
    <DatePickerContext.Provider
      value={{
        isReset,
        setIsReset,
      }}
    >
>>>>>>> 913f5fae78ec68d42aa8153bbf1195d022375f8a
      {children}
    </DatePickerContext.Provider>
  )
}

export const useDatePickerContext = () => {
  return useContext(DatePickerContext)
}

export default DatePickerProvider
