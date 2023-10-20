import React, {useState} from 'react'
import Button from '../button'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselSlider from './carousel-slider'
import {
  CarouselOptions,
  CarouselSliderButton,
  CarouselSliderItem,
  SocicalIcon,
} from './carousel.const'

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

  const generateButtonRangeClassName = () => {
    return data[activeIndex]?.buttons?.length || 0
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
        className={`content-slider-mobile-mode${
          floatingContent ? ' floating-content' : ''
        } ${styles.contentSliderMobileMode}`}
      >
        <CarouselSlider
          onSwitchSlide={handleSwitchSlide}
          socials={socials || []}
          useNavigation={useNavigation}
          autoSwitch={autoSwitch}
          navigationButtonType={navigationButtonType}
          useDotIndicator={useDotIndicator}
          effect='slide'
          className={`current-slide-buttons-${generateButtonRangeClassName()}`}
        >
          {data.map((dataItem: CarouselSliderItem, index: number) => (
            <CarouselSlide
              key={index}
              className={`slider-slide mobile-mode${
                activeIndex === index ? ' active' : ''
              } ${styles.mobileModeSlide}`}
              active={activeIndex === index}
            >
              {dataItem.mask && (
                <div
                  className={`slide-mask ${styles.slideMask}`}
                  style={{background: `rgba(0,0,0,${dataItem.mask})`}}
                />
              )}
              <div
                className={`carousel-mobile-inner-content ${styles.mobileInnerContent}`}
              >
                <img
                  className='slide-background'
                  src={dataItem.image}
                  draggable={false}
                />
                {floatingContent ? (
                  <div
                    className={`slide-body ${styles.slideBody} ${
                      floatingContent ? dataItem.alignment || '' : ''
                    } ${styles.floatingContent}`}
                  >
                    <div
                      className={`content-slider-title ${styles.contentSliderTitle}`}
                    >
                      {dataItem.title}
                    </div>
                    <div
                      className={`content-slider-description ${styles.contentSliderDescription}`}
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
            className={`slide-body ${styles.slideBody} ${styles.noneFloatingSlideBody}`}
          >
            <div
              className={`content-slider-title ${styles.contentSliderTitle} ${styles.mobileContentSliderTitle}`}
            >
              {slideTitle()}
            </div>
            <div
              className={`content-slider-description ${styles.contentSliderDescription} ${styles.mobileContentSliderDescription}`}
            >
              {slideDescription()}
            </div>
          </div>
        ) : (
          ''
        )}
        {buttons && (
          <div
            className={`slide-mobile-buttons ${styles.slideButtonRow} ${styles.slideMobileButtonRow}`}
          >
            {buttons.map((button, index) => {
              return (
                <Button
                  key={index}
                  variant={button.type}
                  className={`${button.type} ${
                    styles['mobile-' + button.type]
                  }`}
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
