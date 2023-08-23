---
title: React Carousel component
components: Carousel
---

# Carousel

<p class="description">A group of slider components. The core component is CarouselSlider with common feature is switching slides.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Carousel} from '@comfortdelgro/react-compass'
```

or

```jsx
import Carousel from '@comfortdelgro/react-compass/carousel'
```

## Example

### Slider

{{"demo": "CarouselSlider.tsx"}}

### Promotion

{{"demo": "CarouselPromotion.tsx"}}

### Mobile

{{"demo": "CarouselMobile.tsx"}}

## Components

| Name                      | Type        | Default | Description                                                                       |
| :------------------------ | :---------- | :------ | :-------------------------------------------------------------------------------- |
| CarouselSlider            | `Component` |         | Core slider that can be reused for multiple purpose of sliding things             |
| CarouselSlider.Promotion  | `Component` |         | Next version of current carousel that extends from CarouselSlider                 |
| CarouselSlider.Mobile     | `Component` |         | Sepecial extended version of CarouselSlider to support different layout on mobile |
| CarouselSlider.Slide      | `Component` |         | A component that contains slide content                                           |
| CarouselSlider.ImageSlide | `Component` |         | Slide component use for a slider that accept only images                          |

## Types

| Name                 | Type                   | Default | Description                                                                                   |
| :------------------- | :--------------------- | :------ | :-------------------------------------------------------------------------------------------- |
| CarouselSliderItem   | `CarouselSliderItem`   |         | Promotion slider item data                                                                    |
| SocicalIcon          | `SocicalIcon`          |         | Item contains social icon data: `icon` and `url`                                              |
| NinePartAlignment    | `NinePartAlignment`    |         | Alignment that apply for a single slide item, remember to put it into CarouselSliderItem data |
| CarouselSliderButton | `CarouselSliderButton` |         | Button that use in sliders definition: `type`, `label`, `callback`                            |
| ButtonType           | `ButtonType`           |         | `primary` `secondary`                                                                         |

## Props

| Name                 | Type                     | Default | Description                                                                              |
| :------------------- | :----------------------- | :------ | :--------------------------------------------------------------------------------------- |
| autoSwitch           | `boolean`                | `true`  | To let the slider auto switch in every 300ms                                             |
| useNavigation        | `boolean`                | `true`  | To show next and previous buttons                                                        |
| useDotIndicator      | `boolean`                | `true`  | To show dot indicators                                                                   |
| navigationButtonType | `icon` `text`            | `icon`  | To use arrow icon or next & prev text                                                    |
| effect               | `fade` `slide`           | `fade`  | The effect of transition between slides                                                  |
| data                 | `CarouselSliderItem[]`   | `-`     | Required parameters                                                                      |
| socials              | `SocicalIcon[]`          | `[]`    | List of social icons definition                                                          |
| buttons              | `CarouselSliderButton[]` | `[]`    | Buttons that displays under the slider, so currently it only works with `CarouselMobile` |

## Methods

| Name          | Type                      | Default  | Description                              |
| :------------ | :------------------------ | :------- | :--------------------------------------- |
| onSwitchSlide | `(index: number) => void` | `number` | Event that calls when slide has switched |
