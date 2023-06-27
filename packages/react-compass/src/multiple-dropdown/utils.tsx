import React from 'react'

export const XIcon = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <g clipPath='url(#clip0_5299_13653)'>
      <path
        d='M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_5299_13653'>
        <rect width='10' height='10' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export function getDefaulValues(
  defaulValue: React.Key[] | undefined,
  value: React.Key[] | undefined,
  disableDefault?: boolean,
): React.Key[] {
  if (value !== undefined && value !== null && value.length >= 0) {
    const res: React.Key[] = []
    for (const key of value) {
      res.push(key)
    }
    return res
  } else if (
    defaulValue !== undefined &&
    defaulValue !== null &&
    defaulValue.length > 0 &&
    !!disableDefault
  ) {
    const res: React.Key[] = []
    for (const key of defaulValue) {
      res.push(key)
    }
    return res
  }
  return []
}