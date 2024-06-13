import React from 'react'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-nodata.module.css'

interface Props {
  colSpan: number
  content?: React.ReactNode
}

export type TableEmptyDataProps = Props &
  Omit<React.HTMLAttributes<HTMLTableCellElement>, keyof Props>

const EmptyDataComponent = React.forwardRef<
  HTMLTableCellElement,
  TableEmptyDataProps
>((props, ref) => {
  const {colSpan, className, content} = props
  const emptyDataRef = useDOMRef<HTMLTableCellElement>(ref)

  const rootClasses = classNames(
    styles.cdgTableEmptyData,
    className,
    'cdg-table-empty-data',
  )

  return (
    <tr>
      <td colSpan={colSpan} ref={emptyDataRef}>
        {content ? (
          content
        ) : (
          <div className={rootClasses}>
            <svg
              width='165'
              height='69'
              viewBox='0 0 165 69'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M35.38 62.8399H104.54C104.931 62.8399 105.313 62.7976 105.68 62.7175C106.047 62.7976 106.429 62.8399 106.82 62.8399H146.34C149.278 62.8399 151.66 60.458 151.66 57.5199C151.66 54.5817 149.278 52.1999 146.34 52.1999H141.78C138.842 52.1999 136.46 49.818 136.46 46.8799C136.46 43.9417 138.842 41.5599 141.78 41.5599H156.22C159.158 41.5599 161.54 39.178 161.54 36.2399C161.54 33.3017 159.158 30.9199 156.22 30.9199H139.5C142.438 30.9199 144.82 28.538 144.82 25.5999C144.82 22.6617 142.438 20.2799 139.5 20.2799H90.86C93.7982 20.2799 96.18 17.898 96.18 14.9599C96.18 12.0217 93.7982 9.63989 90.86 9.63989H47.54C44.6019 9.63989 42.22 12.0217 42.22 14.9599C42.22 17.898 44.6019 20.2799 47.54 20.2799H17.14C14.2019 20.2799 11.82 22.6617 11.82 25.5999C11.82 28.538 14.2019 30.9199 17.14 30.9199H36.14C39.0782 30.9199 41.46 33.3017 41.46 36.2399C41.46 39.178 39.0782 41.5599 36.14 41.5599H5.74001C2.80186 41.5599 0.420013 43.9417 0.420013 46.8799C0.420013 49.818 2.80186 52.1999 5.74001 52.1999H35.38C32.4419 52.1999 30.06 54.5817 30.06 57.5199C30.06 60.458 32.4419 62.8399 35.38 62.8399ZM159.26 62.8399C162.198 62.8399 164.58 60.458 164.58 57.5199C164.58 54.5817 162.198 52.1999 159.26 52.1999C156.322 52.1999 153.94 54.5817 153.94 57.5199C153.94 60.458 156.322 62.8399 159.26 62.8399Z'
                fill='#E6ECF7'
                fill-opacity='0.3'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M73.4701 46.353C73.4107 46.7735 73.38 47.2032 73.38 47.64C73.38 52.6768 77.4632 56.76 82.5 56.76C87.5368 56.76 91.62 52.6768 91.62 47.64C91.62 47.2032 91.5893 46.7735 91.5299 46.353H113.66V66.64C113.66 67.8992 112.639 68.92 111.38 68.92H53.62C52.3608 68.92 51.34 67.8992 51.34 66.64V46.353H73.4701Z'
                fill='white'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M92.38 46.1201C92.38 51.5766 87.9566 56.0001 82.5 56.0001C77.0434 56.0001 72.62 51.5766 72.62 46.1201C72.62 45.9433 72.6246 45.7676 72.6338 45.5931H51.34L58.6059 24.1096C58.9192 23.1834 59.788 22.5601 60.7657 22.5601H104.234C105.212 22.5601 106.081 23.1834 106.394 24.1096L113.66 45.5931H92.3662C92.3754 45.7676 92.38 45.9433 92.38 46.1201Z'
                fill='white'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M90.9341 46.8454C90.9341 51.0618 87.158 55.2399 82.5 55.2399C77.8419 55.2399 74.0658 51.0618 74.0658 46.8454C74.0658 46.7088 74.0698 45.813 74.0776 45.6782H58.18L64.3826 30.5973C64.65 29.8816 65.3917 29.3999 66.2264 29.3999H98.7736C99.6082 29.3999 100.35 29.8816 100.617 30.5973L106.82 45.6782H90.9223C90.9302 45.813 90.9341 46.7088 90.9341 46.8454Z'
                fill='#CCD9EF'
                fill-opacity='0.6'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M52.29 45.7493V65.88C52.29 66.6145 52.8855 67.21 53.62 67.21H111.38C112.115 67.21 112.71 66.6145 112.71 65.88V45.7493L105.494 24.4139C105.311 23.8736 104.805 23.51 104.234 23.51H60.7658C60.1954 23.51 59.6886 23.8736 59.5059 24.4139L52.29 45.7493Z'
                stroke='#0142AF'
                stroke-width='2.5'
              />
              <path
                d='M61.98 45.3601C64.9718 45.3601 68.2005 45.3601 71.6661 45.3601C73.0921 45.3601 73.0921 46.3622 73.0921 46.8801C73.0921 51.9169 77.2692 56.0001 82.4219 56.0001C87.5746 56.0001 91.7517 51.9169 91.7517 46.8801C91.7517 46.3622 91.7517 45.3601 93.1777 45.3601H112.14M56.336 45.3601H58.18H56.336Z'
                stroke='#0142AF'
                stroke-width='2.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M101.576 5.31012L93.14 14.7745M81.8157 2.04004V14.7745V2.04004ZM61.98 5.31012L70.4157 14.7745L61.98 5.31012Z'
                stroke='#99B3DF'
                stroke-width='2.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <div
              className={classNames(
                styles.cdgTableEmptyDataDesciption,
                'cdg-table-empty-data-text',
              )}
            >
              Your list is empty.
            </div>
          </div>
        )}
      </td>
    </tr>
  )
})

export default EmptyDataComponent
