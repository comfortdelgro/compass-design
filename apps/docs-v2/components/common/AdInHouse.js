/* eslint react/jsx-no-target-blank: ["error", { allowReferrer: true }] */
import AdDisplay from 'components/common/AdDisplay'
import PropTypes from 'prop-types'

export default function AdInHouse(props) {
  const {ad} = props

  return (
    <AdDisplay ad={{poweredby: 'MUI', label: `in-house-${ad.name}`, ...ad}} />
  )
}

AdInHouse.propTypes = {
  ad: PropTypes.object.isRequired,
}
