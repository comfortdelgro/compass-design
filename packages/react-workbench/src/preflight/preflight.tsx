import React from 'react'
import {getCssText} from '../theme/stitches.config'
import {preflightStyles} from './preflight.styles'

type PreflightComponent = React.FC & {flush: () => React.ReactNode}

const Preflight: PreflightComponent = () => {
  preflightStyles()

  return <React.Fragment></React.Fragment>
}

Preflight.flush = () => (
  <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}} />
)

export default Preflight
