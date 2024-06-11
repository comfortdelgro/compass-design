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
          className={`cdg-carousel-mobile-current-slide-buttons-${
            data[activeIndex]?.buttons?.length || 0
          }`}
        >
          {data.map((dataItem: CarouselSliderItem, index: number) => (
            <CarouselSlide
              key={index}
              className={[
                styles.mobileModeSlide,
                activeIndex === index && 'active',
                'mobile-mode',
                'cdg-carousel-mobile-slide',
              ]
                .filter(Boolean)
                .join(' ')}
              active={activeIndex === index}
            >
              {dataItem.mask && (
                <div
                  className={`${styles.slideMask} cdg-carousel-mobile-slide-mask`}
                  style={{background: `rgba(0,0,0,${dataItem.mask})`}}
                />
              )}
              <div
                className={`${styles.mobileInnerContent} cdg-carousel-mobile-inner-content`}
              >
                <img
                  className='slide-background'
                  src={dataItem.image}
                  draggable={false}
                />
                {floatingContent ? (
                  <div
                    className={[
                      styles.slideBody,
                      styles.floatingContent,
                      floatingContent && dataItem.alignment,
                      'mobile-mode',
                      'cdg-carousel-mobile-slide-body',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div
                      className={`${styles.contentSliderTitle} cdg-carousel-mobile-content-slider-title`}
                    >
                      {dataItem.title}
                    </div>
                    <div
                      className={`${styles.contentSliderDescription} cdg-carousel-mobile-content-slider-description`}
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
            className={[
              styles.slideBody,
              styles.noneFloatingSlideBody,
              'cdg-carousel-mobile-slide-body',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div
              className={[
                styles.contentSliderTitle,
                styles.mobileContentSliderTitle,
                'cdg-carousel-mobile-content-slider-title',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {slideTitle()}
            </div>
            <div
              className={[
                styles.contentSliderDescription,
                styles.mobileContentSliderDescription,
                'cdg-carousel-mobile-content-slider-description',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {slideDescription()}
            </div>
          </div>
        ) : (
          ''
        )}
        {buttons && (
          <div
            className={[
              styles.slideButtonRow,
              styles.slideMobileButtonRow,
              'cdg-carousel-mobile-slide-mobile-buttons',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {buttons.map((button, index) => {
              return (
                <Button
                  key={index}
                  variant={button.type}
                  className={[
                    button.type,
                    styles['mobile-' + button.type],
                    'cdg-carousel-mobile-slide-mobile-button',
                  ]
                    .filter(Boolean)
                    .join(' ')}
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
