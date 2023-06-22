import React, {useContext} from 'react'
import {CSS} from '../utils/stitches.types'

interface GutterContextProps {
  gutterRef?: React.RefObject<HTMLDivElement>
  isResizing?: boolean
  isGutterLeftSide?: boolean
  gutterWidth?: CSS['width']
  minWidth?: CSS['minWidth']
  maxWidth?: CSS['maxWidth']
  hasBothSides?: boolean
  setGutterWidth?: (width: CSS['width']) => void
  setIsResizing?: React.Dispatch<React.SetStateAction<boolean>>
}

export const GutterContext = React.createContext<GutterContextProps>({})

export const useGutterContext = () => useContext(GutterContext)
