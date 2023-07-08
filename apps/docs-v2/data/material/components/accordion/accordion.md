---
productId: material-ui
title: React Accordion component
components: Accordion, AccordionActions, AccordionDetails, AccordionSummary
githubLabel: 'component: accordion'
materialDesign: https://m1.material.io/components/expansion-panels.html
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
---

# Accordion

<p class="description">The accordion component allows the user to show and hide sections of related content on a page.</p>

An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.

{{"component": "modules/components/ComponentLinkHeader.js"}}

:::info
This component is no longer documented in the [Material Design guidelines](https://m2.material.io/), but Material UI will continue to support it.
:::

## Basic accordion

{{"demo": "BasicAccordion.js", "bg": true}}

## Controlled accordion

Extend the default behavior to create an accordion with the `Accordion` component.

{{"demo": "ControlledAccordions.js", "bg": true}}

## Customization

Here is an example of customizing the component.
You can learn more about this in the [overrides documentation page](/material-ui/customization/how-to-customize/).

{{"demo": "CustomizedAccordions.js"}}

## Performance

The content of Accordions is mounted by default even if the accordion is not expanded.
This default behavior has server-side rendering and SEO in mind.
If you render expensive component trees inside your accordion details or simply render many
accordions it might be a good idea to change this default behavior by enabling the
`unmountOnExit` in `TransitionProps`:

```jsx
<Accordion TransitionProps={{ unmountOnExit: true }} />
```

As with any performance optimization this is not a silver bullet.
Be sure to identify bottlenecks first and then try out these optimization strategies.

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

For optimal accessibility we recommend setting `id` and `aria-controls` on the
`AccordionSummary`. The `Accordion` will derive the necessary `aria-labelledby`
and `id` for the content region of the accordion.
