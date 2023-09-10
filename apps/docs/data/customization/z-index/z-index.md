# z-index

<p class="description">z-index is the CSS property that helps control layout by providing a third axis to arrange content.</p>

The problem is when developers see the other have zIndex with value 999, they
will increase number to let their zIndex higher. Someone uses 9999, someone
uses 10001... That time we will see so many inconsistent problems about zIndex
on the screen. For example: Dropdown content is under the dialog, or any
content is floatting above loading indicator.

So that, following a rule will let our zIndex consistent.

:::info
**⚠️ Infor**

View on [Figma](https://www.figma.com/file/MQVnynY3v1pI55Cm6l5qHK/CDGNotes?node-id=8-2&t=PMEQNnRxCQq55Hk3-4)
:::

Notes:

- The other or local component (absolute / relative inside one of above) will
  have z-index in range from 1 to 10
- Don’t use 999 or 9999 or 99999 for z-index value

For better understanding about zIndex, please remember the rule: Highest of
lower floor will always lower than lowest of higher floor.

Or Refer: [https://css-tricks.com/almanac/properties/z/z-index/](https://css-tricks.com/almanac/properties/z/z-index/)
