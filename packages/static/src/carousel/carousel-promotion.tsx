import React, {useState} from 'react'
import Button from '../button'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselSlider from './carousel-slider'
import {
  CarouselOptions,
  CarouselSliderItem,
  NavigationButtonType,
  SocicalIcon,
} from './carousel.const'

import styles from './styles/carousel.module.css'

interface Props extends CarouselOptions {
  data: CarouselSliderItem[]
  socials?: SocicalIcon[]
  navigationButtonType?: NavigationButtonType
}

export type CarouselPromotionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselPromotion = React.forwardRef<
  HTMLDivElement,
  CarouselPromotionProps
>((props, ref) => {
  const {
    data,
    socials = [],
    useNavigation = true,
    autoSwitch = true,
    navigationButtonType = 'icon',
    effect = 'slide',
    css = {},
    onSwitchSlide = () => null,
    ...htmlProps
  } = props

  const [activeIndex, setActiveIndex] = useState(0)

  const buttonRef = useDOMRef<HTMLDivElement>(ref)
  const carouselRef = useDOMRef<HTMLDivElement>(ref)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
    onSwitchSlide(index)
  }

  const generateButtonRangeClassName = () => {
    return data[activeIndex]?.buttons?.length || 0
  }

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <CarouselSlider
        onSwitchSlide={handleSwitchSlide}
        socials={socials || []}
        useNavigation={useNavigation}
        autoSwitch={autoSwitch}
        navigationButtonType={navigationButtonType}
        effect={effect}
        ref={carouselRef}
        css={css}
        {...htmlProps}
        className={`current-slide-buttons-${generateButtonRangeClassName()}`}
      >
        {data.map((dataItem: CarouselSliderItem, index: number) => (
          <CarouselSlider.Slide
            key={index}
            className={`slider-slide${activeIndex === index ? ' active' : ''}`}
            active={activeIndex === index}
          >
            <img
              className={`slide-background ${styles.slideBackground}`}
              src={dataItem.image}
              draggable={false}
            />
            {dataItem.mask && (
              <div
                className={`slide-mask ${styles.slideMask}`}
                style={{background: `rgba(0,0,0,${dataItem.mask})`}}
              />
            )}
            <div
              className={`slide-body ${styles.slideBody} ${
                dataItem.alignment || ''
              }`}
            >
              <h4
                className={`content-slider-title ${styles.contentSliderTitle}`}
              >
                {dataItem.title}
              </h4>
              <p
                className={`content-slider-description ${styles.contentSliderDescription}`}
              >
                {dataItem.description}
              </p>
              {dataItem.buttons && (
                <div className={`slide-button-row ${styles.slideButtonRow}`}>
                  {dataItem.buttons.map((button, index) => {
                    return (
                      <Button
                        key={index}
                        variant={button.type}
                        className={`${button.type} ${styles[button.type]}`}
                      >
                        {button.label}
                      </Button>
                    )
                  })}
                </div>
              )}
            </div>
          </CarouselSlider.Slide>
        ))}
      </CarouselSlider>
    </CssInjection>
  )
})

export default CarouselPromotion
