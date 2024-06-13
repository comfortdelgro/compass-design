import React, {useState} from 'react'
import Button from '../button'
import {CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselSlider from './carousel-slider'
import {
  CarouselOptions,
  CarouselSliderButton,
  CarouselSliderItem,
  SocicalIcon,
} from './carousel.const'

import {classNames} from '../utils/string'
import CarouselSlide from './carousel-slide'
import styles from './styles/carousel.module.css'

interface Props extends CarouselOptions {
  data: CarouselSliderItem[]
  buttons?: CarouselSliderButton[]
  socials?: SocicalIcon[]
  floatingContent?: boolean
}

export type CarouselMobileProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselMobile = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    data,
    buttons = [],
    socials,
    autoSwitch = false,
    floatingContent = false,
    useNavigation = false,
    useDotIndicator = true,
    navigationButtonType = 'icon',
    css = {},
    onSwitchSlide = () => null,
    ...htmlProps
  } = props

  const wrapperRef = useDOMRef<HTMLDivElement>(ref)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
    onSwitchSlide(index)
  }

  const slideTitle = () => {
    return data[activeIndex]?.title || ''
  }

  const slideDescription = () => {
    return data[activeIndex]?.description || ''
  }

  return (
    <CssInjection css={css} childrenRef={wrapperRef}>
      <div
        {...htmlProps}
        className={classNames(
          styles.contentSliderMobileMode,
          floatingContent && 'floating-content',
          'cdg-content-slider-mobile-mode',
        )}
      >
        <CarouselSlider
          onSwitchSlide={handleSwitchSlide}
          socials={socials || []}
          useNavigation={useNavigation}
          autoSwitch={autoSwitch}
          navigationButtonType={navigationButtonType}
          useDotIndicator={useDotIndicator}
          effect='slide'
          className={`cdg-carousel-mobile-current-slide-buttons-${
            data[activeIndex]?.buttons?.length || 0
          }`}
        >
          {data.map((dataItem: CarouselSliderItem, index: number) => (
            <CarouselSlide
              key={index}
              className={classNames(
                styles.mobileModeSlide,
                activeIndex === index && 'active',
                'mobile-mode',
                'cdg-carousel-mobile-slide',
              )}
              active={activeIndex === index}
            >
              {dataItem.mask && (
                <div
                  className={classNames(
                    styles.slideMask,
                    'cdg-carousel-mobile-slide-mask',
                  )}
                  style={{background: `rgba(0,0,0,${dataItem.mask})`}}
                />
              )}
              <div
                className={classNames(
                  styles.mobileInnerContent,
                  'cdg-carousel-mobile-inner-content',
                )}
              >
                <img
                  className='cdg-carousel-mobile-inner-content-image'
                  src={dataItem.image}
                  draggable={false}
                />
                {floatingContent ? (
                  <div
                    className={classNames(
                      styles.slideBody,
                      styles.floatingContent,
                      floatingContent && dataItem.alignment,
                      'mobile-mode',
                      'cdg-carousel-mobile-inner-content-body',
                    )}
                  >
                    <div
                      className={classNames(
                        styles.contentSliderTitle,
                        'cdg-carousel-mobile-inner-content-title',
                      )}
                    >
                      {dataItem.title}
                    </div>
                    <div
                      className={classNames(
                        styles.contentSliderDescription,
                        'cdg-carousel-mobile-inner-content-description',
                      )}
                    >
                      {dataItem.description}
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </CarouselSlide>
          ))}
        </CarouselSlider>

        {!floatingContent ? (
          <div
            className={classNames(
              styles.slideBody,
              styles.noneFloatingSlideBody,
              'cdg-carousel-mobile-slide-body',
            )}
          >
            <div
              className={classNames(
                styles.contentSliderTitle,
                styles.mobileContentSliderTitle,
                'cdg-carousel-mobile-content-slider-title',
              )}
            >
              {slideTitle()}
            </div>
            <div
              className={classNames(
                styles.contentSliderDescription,
                styles.mobileContentSliderDescription,
                'cdg-carousel-mobile-content-slider-description',
              )}
            >
              {slideDescription()}
            </div>
          </div>
        ) : (
          ''
        )}
        {buttons && (
          <div
            className={classNames(
              styles.slideButtonRow,
              styles.slideMobileButtonRow,
              'cdg-carousel-mobile-slide-mobile-buttons',
            )}
          >
            {buttons.map((button, index) => {
              return (
                <Button
                  key={index}
                  variant={button.type}
                  className={classNames(
                    button.type,
                    styles['mobile-' + button.type],
                    'cdg-carousel-mobile-slide-mobile-button',
                  )}
                  onPress={() => {
                    if (button.callback) {
                      button.callback()
                    }
                  }}
                >
                  {button.label}
                </Button>
              )
            })}
          </div>
        )}
      </div>
    </CssInjection>
  )
})

export default CarouselMobile
