import {AriaLabelingProps, DOMProps} from '../types'

interface Options {
  /**
   * If labelling associated aria properties should be included in the filter.
   */
  labelable?: boolean
  /**
   * A Set of other property names that should be included in the filter.
   */
  propNames?: Set<string>
}

const DOMPropNames = new Set(['id'])
const propRe = /^(data-.*)$/

export function filterDOMProps(
  props: DOMProps & AriaLabelingProps,
  opts: Options = {},
): DOMProps & AriaLabelingProps {
  const {labelable, propNames} = opts
  const filteredProps = {}

  for (const prop in props) {
    if (
      Object.prototype.hasOwnProperty.call(props, prop) &&
      (DOMPropNames.has(prop) ||
        labelable ||
        propNames?.has(prop) ||
        propRe.test(prop))
    ) {
      filteredProps[prop] = props[prop]
    }
  }

  return filteredProps as DOMProps & AriaLabelingProps
}
