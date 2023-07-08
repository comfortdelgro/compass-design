import ChatRounded from '@mui/icons-material/ChatRounded'
import Chip from '@mui/material/Chip'
import {styled} from '@mui/material/styles'
import FigmaIcon from 'components/common/FigmaIcon'
import PropTypes from 'prop-types'
import * as React from 'react'

const Root = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  '& .MuiChip-root .MuiChip-iconSmall': {
    marginLeft: 4,
  },
})

export default function ComponentLinkHeader(props) {
  const {
    markdown: {headers},
    design,
  } = props

  return (
    <Root>
      {headers.githubLabel ? (
        <li>
          <Chip
            clickable
            role={undefined}
            component='a'
            size='small'
            variant='outlined'
            rel='nofollow'
            href={`${process.env.SOURCE_CODE_REPO}/labels/${encodeURIComponent(
              headers.githubLabel,
            )}`}
            icon={<ChatRounded color='primary' />}
            data-ga-event-category='ComponentLinkHeader'
            data-ga-event-action='click'
            data-ga-event-label={'Github'}
            data-ga-event-split='0.1'
            label={'Github'}
          />
        </li>
      ) : null}
      {design !== false ? (
        <React.Fragment>
          <li>
            <Chip
              clickable
              role={undefined}
              component='a'
              size='small'
              variant='outlined'
              rel='nofollow'
              href='https://mui.com/store/items/figma-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header'
              icon={<FigmaIcon />}
              data-ga-event-category='ComponentLinkHeader'
              data-ga-event-action='click'
              data-ga-event-label='Figma'
              data-ga-event-split='0.1'
              label='Figma'
            />
          </li>
        </React.Fragment>
      ) : null}
    </Root>
  )
}

ComponentLinkHeader.propTypes = {
  design: PropTypes.bool,
  markdown: PropTypes.shape({
    headers: PropTypes.object.isRequired,
  }).isRequired,
}
