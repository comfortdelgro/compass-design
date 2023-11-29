---
backgroundColor: #EACEEA
textColor: #684868
imgSrc: /static/images/colors-background.png
---

# Colors

<p class="description hidden">Color distinguishes a brand. It is used to convey personality, attracts the eye and indicate change.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {theme} from '@comfortdelgro/react-compass'
```

## Palette

### Primary Colors

ComfortDelgro color palette has been created to reflect the spirit of our brand. Blue is used across all our communication as an essential element of branding. Primary color is the color displayed most frequently across your app's screens and components.

Black is used primarily for body text and headings, and White is used for screen backgrounds and negative space.

#### 1. Main Colors

{{"component": "data/foundation/colors/showcases/PrimaryColors.tsx"}}

#### 2. Text Colors

{{"component": "data/foundation/colors/showcases/TextColors.tsx"}}

#### 3. Dividers & Borders

{{"component": "data/foundation/colors/showcases/DividersBorders.tsx"}}

### Secondary Colors

Secondary color provides more ways to accent and distinguish our product. Each color is selected with purpose in order to provide meaningful feedback within our products. Secondary colors can also be used to create unique secondary brands for each one of ComfortDelgro products.

{{"component": "data/foundation/colors/showcases/SecondaryColors.tsx"}}

### Shades & Tints

We intend for tints and shades to be ever evolving, offering an endless palette to choose from. Usage of these colors varies depending on scenarios, but they come in handy for components in our products.

#### 1. Theme

{{"component": "data/foundation/colors/showcases/Theme.tsx"}}

#### 2. Overlays

{{"component": "data/foundation/colors/showcases/Overlays.tsx"}}

#### 3. Grays

{{"component": "data/foundation/colors/showcases/Grays.tsx"}}

#### 4. Backgrounds

{{"component": "data/foundation/colors/showcases/Backgrounds.tsx"}}

#### 5. Gradients

{{"component": "data/foundation/colors/showcases/Gradients.tsx"}}

## Rules

### Accessibility

All our product user interface should meet minimum WCAG AA level contrast guidelines. Low contrast can be problematic for people with lower vision, color blindness or even in non-optimal conditions (outdoor, bright sunlight).

### Contrast Ratio

All colors in this section are marked with their contrast ratio against White. If you use these colors on any other background or use these as background with text other than White, you will need to calculate these ratios again.

The minimum required contrast ration depends on the text size and weight. To mantain WCAG AA level of contrast ratio, colors are required to be at least 4.5:1 for normal text and 3:1 for large text, and 3:1 for graphics and user interface components (such as form input borders), with exception to text or images of text that are part of an inactive user interface component (disabled states).

### RAG (Red, Amber, and Green)

This palette should only be used to convey status or meaning for messages and feedback. For contexts such as selecting risk, the full RAG palette can be used to reinforce positivity or negativity of the user’s choice.
