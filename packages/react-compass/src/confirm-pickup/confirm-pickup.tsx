'use client'

import {forwardRef, HTMLAttributes, memo, useCallback, useState} from 'react'
import Button from '../button'
import Divider from '../divider'
import TextField from '../textfield'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import classes from './styles/confirm-pickup.module.css'

export type ConfirmPUPointProps = {
  css?: unknown
  h5?: boolean
  onConfirmPickup: (specificPUPoint?: string) => void
  onChangePUPoint?: () => void
  placeholder?: string
  puPointTitle: string
  puPointDescription: string
  specificPUPoint: string
} & HTMLAttributes<HTMLDivElement>

const ConfirmPUPoint = memo(
  forwardRef<HTMLDivElement, ConfirmPUPointProps>(
    (
      {
        onConfirmPickup,
        onChangePUPoint,
        placeholder = '',
        puPointTitle,
        puPointDescription,
        specificPUPoint: initialSpecificPUPoint,
        css = {},
        h5 = false,
        className,
        ...htmlDivAttributes
      },
      ref,
    ) => {
      const componentRef = useDOMRef(ref)

      const [specificPUPoint, setSpecificPickupPoint] = useState<string>(
        initialSpecificPUPoint,
      )

      const handleConfirmPickup = useCallback(
        () => onConfirmPickup(specificPUPoint),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [specificPUPoint],
      )

      const rootClasses = [classes.confirmPickup, className, 'cdg-cp-container']
        .filter(Boolean)
        .join(' ')

      return (
        <CssInjection css={css} childrenRef={componentRef}>
          <div
            ref={componentRef}
            className={rootClasses}
            {...htmlDivAttributes}
          >
            <div className={`${classes.puPointAddress} cdg-cp-point-address`}>
              <div>
                <div
                  className={`${classes.puPointAddressTitle} cdg-cp-point-address__title`}
                >
                  {puPointTitle}
                </div>
                <div
                  className={`${classes.puPointAddressDescription} cdg-cp-point-address__description`}
                >
                  {puPointDescription}
                </div>
              </div>
              <Button
                className={`${classes.puPointAddressIcon} cdg-cp-point-address__icon`}
                variant='ghost'
                onPress={() => onChangePUPoint?.()}
              >
                <svg
                  width='18'
                  height='21'
                  viewBox='0 0 18 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.414 14.5L13.556 4.35799L12.142 2.94399L2 13.086V14.5H3.414ZM4.243 16.5H0V12.257L11.435 0.821992C11.6225 0.634521 11.8768 0.529205 12.142 0.529205C12.4072 0.529205 12.6615 0.634521 12.849 0.821992L15.678 3.65099C15.8655 3.83852 15.9708 4.09283 15.9708 4.35799C15.9708 4.62316 15.8655 4.87746 15.678 5.06499L4.243 16.5ZM0 18.5H18V20.5H0V18.5Z'
                    fill='#008BF8'
                  />
                </svg>
              </Button>
            </div>
            <div className={`${classes.puPointLabel} cdg-cp-point-label`}>
              <div>Set a specific pickup point</div>
              <Divider />
            </div>
            {initialSpecificPUPoint ? (
              <div
                className={`${classes.puSpecificLocation} cdg-cp-specific-location`}
              >
                <svg
                  width='12'
                  height='15'
                  viewBox='0 0 12 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`${classes.puSpecificLocationSVG} cdg-cp-specific-location__svg`}
                >
                  <path
                    d='M6.07416 14.3588C6.04885 14.3635 6.02299 14.365 5.99735 14.3625C5.8928 14.3524 5.79176 14.3199 5.7017 14.2672C4.09509 13.2699 2.69008 12.0009 1.55487 10.5217C0.595114 9.27986 0.0526721 7.78613 2.58066e-05 6.24014C-0.0030831 5.20954 0.274756 4.19614 0.805894 3.30076C1.33703 2.40538 2.10295 1.65926 3.02743 1.13663C3.94415 0.623425 4.98786 0.357022 6.0488 0.365427C7.10975 0.373833 8.14874 0.656736 9.05653 1.18439C9.96286 1.72763 10.7082 2.48606 11.2208 3.38655C11.7367 4.29343 12.0048 5.31122 11.9999 6.34473C11.8316 8.46416 10.8578 10.4501 9.26396 11.9242C8.4021 12.8039 7.43579 13.5834 6.38483 14.2466C6.28838 14.3003 6.18338 14.3382 6.07416 14.3588ZM5.99398 4.35751C5.72584 4.35717 5.46035 4.40844 5.21318 4.5083C4.966 4.60816 4.74216 4.75459 4.55485 4.93894C4.26736 5.21989 4.07197 5.57572 3.9929 5.96232C3.91383 6.34893 3.95454 6.74933 4.10999 7.11392C4.25928 7.47767 4.51887 7.78994 4.85512 8.01021C5.19136 8.23048 5.58873 8.3486 5.99569 8.34924H6.01027C6.27642 8.3496 6.53995 8.29879 6.78534 8.19978C7.03074 8.10077 7.25303 7.95558 7.43911 7.77275C7.67553 7.53895 7.8496 7.25369 7.94649 6.94129C8.04338 6.62888 8.06021 6.2986 7.99555 5.9786C7.93089 5.65859 7.78666 5.35836 7.57515 5.10348C7.36364 4.8486 7.09112 4.64664 6.78083 4.51481C6.53237 4.41164 6.26465 4.35813 5.99398 4.35751Z'
                    fill='#0142AF'
                  />
                </svg>

                <div
                  className={`${classes.puSpecificLocationName} cdg-cp-specific-location__name`}
                >
                  {initialSpecificPUPoint}
                </div>
              </div>
            ) : (
              <TextField
                className={`${classes.puTextField} cdg-cp-textfield`}
                placeholder={placeholder}
                onChange={(value) => setSpecificPickupPoint(value.toString())}
                h5={h5}
              />
            )}
            <Button
              className={`${classes.puConfirmButton} cdg-cp-button`}
              onPress={handleConfirmPickup}
              h5={h5}
              fullWidth
            >
              Confirm pick up
            </Button>
          </div>
        </CssInjection>
      )
    },
  ),
)

export default ConfirmPUPoint
