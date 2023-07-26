{{"backgroundColor": #F4CAC2}}
{{"imgSrc": https:\/\/s3-alpha-sig.figma.com/img/330e/fb28/f14e88bcf8b2a5de7ff7c31033655dee?Expires=1691366400&Signature=E91sD05bU3HN~Tgs~ouLwDqKJzDFK7~2QGyeOqOXh4FDxULOhgmvx4zBJx4qvoN-d2WpG5v2hwGMgzN~0CpMCjLvbeCQJu1puwUxLrSOia1MXAB9eaKZyz3jpHCJJjA5tUFFvTweLS9o~WOEDIanyYsbUcoYvT1l1LT2QscojGSzz4noIX9g5bLLcgn9pntqZ8eKG-xwxgv520M0LWqIpMF6R8q0vfCe2Qav4BgslUBEUag1z8M5ldNXNKaoenhcQ6idw9khKBPotj1AODEZtcFpKEJIS~WmDULADHTTG~I1GwI8sKPK3BcaUsn~atRZFIfEb5Uv-oSiNxgdKpM8jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4}}

# Typography

<p class="description hidden">Clear typographical hierarchy organizes and structures content, making it easy for people to find their way through an experience.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Typography} from '@comfortdelgro/react-compass'
```

or

```jsx
import Typography from '@comfortdelgro/react-compass/typography'
```

## Brand typography

<p>
  We use our custom font, Poppins, for almost everything brand and marketing — from banner ads to billboards. It was designed to be incredibly versatile with lots of range in terms of tone and playfulness. It can be quirky and expressive when it needs to be, or neutral when the situation calls for something a bit more serious. On rare occasions, we also use native typography for selected elements.
</p>

{{"component": "data/foundation/typography/components/example-panel.tsx"}}

## Usage

<p>
  Keeping typography consistent and sticking to logical hierarchies ensures that elements in the UI are clear and easily recognizable when scanning the page. Text sizes, styles, and layouts were selected to balance content and UI and to foster familiarity.
  <br/>
  The default appearance of typography in Atlassian Design System uses the UI properties. The use of long form properties is up to individual products.
</p>

## Fonts

- Poppin is the primary digital product typeface of Pax app for both iOS and AOS.
- Native OS System feedback will use Roboto for AOS, and SF Sans Pro for IOS.

## Weights

<p>
  The choice of font weight is also based on the principles of order, stability, and restraint. In most cases, just regular and bold should be enough.
</P>

{{"component": "data/foundation/typography/components/font-weight-example.tsx"}}

## Variants

Compass Typography provides you with variant of pre-defined font-weight and font-size options

### Display

{{"demo": "/showcases/display-typography.tsx"}}

### Header

{{"demo": "/showcases/header-typography.tsx"}}

### Body

{{"demo": "/showcases/body-typography.tsx"}}

### Labels

{{"demo": "/showcases/labels-typography.tsx"}}

### Links

{{"demo": "/showcases/links-typography.tsx"}}

## Styling

{{"demo": "/showcases/styled-typography.tsx"}}

## Props

### Props Body:

| Name      | Type                       | Default | Description               |
| :-------- | :------------------------- | :------ | :------------------------ |
| variant   | `body1`\|`body2`\|`body3`  | `body1` | Font size of text         |
| component | `Component`                | -       | Displayed as specific tag |
| weight    | `none`\|`bold`\|`semibold` | `none`  | Font weight of text       |
| css       | `CSS`                      | —       |                           |

### Props Display:

| Name      | Type                               | Default    | Description               |
| :-------- | :--------------------------------- | :--------- | :------------------------ |
| variant   | `display1`\|`display2`\|`display3` | `display1` | Font size of text         |
| component | `Component`                        | -          | Displayed as specific tag |
| css       | `CSS`                              | —          |                           |

### Props Header:

| Name      | Type                                                             | Default   | Description               |
| :-------- | :--------------------------------------------------------------- | :-------- | :------------------------ |
| variant   | `header0`\|`header1`\|`header2`\|`header3`\|`header4`\|`header5` | `header1` | Font size of text         |
| component | `Component`                                                      | -         | Displayed as specific tag |
| css       | `CSS`                                                            | —         |                           |

### Props Label:

| Name      | Type                                | Default  | Description               |
| :-------- | :---------------------------------- | :------- | :------------------------ |
| variant   | `label1`\|`label2`\|`label3`        | `label1` | Font size of text         |
| component | `Component`                         | -        | Displayed as specific tag |
| weight    | `none`\|`bold`\|`semibold`\|`light` | `none`   | Font weight of text       |
| css       | `CSS`                               | —        |                           |

### Props Link:

| Name      | Type                      | Default | Description               |
| :-------- | :------------------------ | :------ | :------------------------ |
| variant   | `link1`\|`link2`\|`link3` | `link1` | Font size of text         |
| component | `Component`               | -       | Displayed as specific tag |
| weight    | `none`\|`semibold`        | `none`  | Font weight of text       |
| css       | `CSS`                     | —       |                           |

### Component

Component type equals: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span"
