import React, {useState} from 'react'
import Button from '../button'
import {CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselSlider from './carousel-slider'
import {
  CarouselOptions,
  CarouselSliderItem,
  NavigationButtonType,
  NinePartAlignment,
  SocicalIcon,
} from './carousel.const'

import {capitalizeFirstLetter, classNames} from '../utils/string'
import CarouselSlide from './carousel-slide'
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

  const toCamelCase = (option: NinePartAlignment) => {
    const parts = option.split('-')
    return parts[0] + capitalizeFirstLetter(parts[1])
  }

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <CarouselSlider
        {...htmlProps}
        css={css}
        effect={effect}
        ref={carouselRef}
        socials={socials || []}
        autoSwitch={autoSwitch}
        useNavigation={useNavigation}
        navigationButtonType={navigationButtonType}
        onSwitchSlide={handleSwitchSlide}
        className={`cdg-carousel-promotion-current-slide-buttons-${
          data[activeIndex]?.buttons?.length || 0
        }`}
      >
        {data.map((dataItem: CarouselSliderItem, index: number) => (
          <CarouselSlide
            key={index}
            className={classNames(
              activeIndex === index && 'active',
              'cdg-carousel-promotion-slide',
            )}
            active={activeIndex === index}
          >
            <img
              className={classNames(
                styles.slideBackground,
                'cdg-carousel-promotion-slide-background',
              )}
              src={dataItem.image}
              draggable={false}
            />
            {dataItem.mask && (
              <div
                className={classNames(
                  styles.slideMask,
                  'cdg-carousel-promotion-slide-mask',
                )}
                style={{background: `rgba(0,0,0,${dataItem.mask})`}}
              />
            )}
            <div
              className={classNames(
                styles.slideBody,
                dataItem.alignment || '',
                dataItem.alignment && styles[toCamelCase(dataItem.alignment)],
                'cdg-carousel-promotion-slide-body',
              )}
            >
              <h4
                className={classNames(
                  styles.contentSliderTitle,
                  'cdg-carousel-promotion-content-slider-title',
                )}
              >
                {dataItem.title}
              </h4>
              <p
                className={classNames(
                  styles.contentSliderDescription,
                  'cdg-carousel-promotion-content-slider-description',
                )}
              >
                {dataItem.description}
              </p>
              {dataItem.buttons && (
                <div
                  className={classNames(
                    styles.slideButtonRow,
                    'cdg-carousel-promotion-slide-button-row',
                  )}
                >
                  {dataItem.buttons.map((button, index) => {
                    return (
                      <Button
                        key={index}
                        variant={button.type}
                        className={classNames(
                          button.type,
                          styles[button.type],
                          'cdg-carousel-promotion-slide-button',
                        )}
                      >
                        {button.label}
                      </Button>
                    )
                  })}
                </div>
              )}
            </div>
          </CarouselSlide>
        ))}
      </CarouselSlider>
    </CssInjection>
  )
})

export default CarouselPromotion
