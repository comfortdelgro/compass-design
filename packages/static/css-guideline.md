## 1. Introduction

This guideline outlines best practices for writing and organizing `.module.css` files in React Compass that every member must follow

## 2. Class Naming

- Use descriptive, semantic class names that reflect the purpose of the element.
- Use camelCase for class names.
- Avoid generic or unclear class names like "red-text" or "big-font."

Example:

```css
/* Good */
.button {
  /* Styles for buttons */
}

/* Bad */
.button1 {
  /* Unclear and non-descriptive */
}
```

## 3. Selectors

### 3.1 Selector Specificity

- Always consider the specificity of selectors to ensure predictable and maintainable styles. Selector specificity determines which rule is applied when multiple rules target the same element.
- Avoid using overly specific selectors, as they can lead to unintended side effects and make your styles hard to override.

#### Good:

```css
/* Specific, but not overly so */
.container .box {
  /* Styles for .box within .container */
}
```

#### Bad:

```css
/* Overly specific */
#content > .container #sidebar .box {
  /* Highly specific styles */
}
```

### 3.2 Avoid Overusing Descendant Selectors

- While descendant selectors (`space`) can be useful for scoping styles, they should be used judiciously. Excessive use of descendant selectors can slow down rendering performance.

#### Good:

```css
/* Limited use of descendant selector */
.header .logo {
  /* Styles for .logo within .header */
}
```

#### Bad:

```css
/* Excessive descendant selectors */
body div section ul li a {
  /* Highly nested styles */
}
```

### 3.3 Avoid Using Descendant Selectors when only selecting child elements

#### Good:

```css
.header > .logo {
  /* Styles for .logo within .header */
}
```

#### Bad:

```css
.header .logo {
  /* Styles for .logo within .header */
}
```

### 3.4 Prefer Class Selectors

- Class selectors are more versatile and reusable than tag or ID selectors. Favor them whenever possible.

#### Good:

```css
/* Using class selector */
.button {
  /* Button styles */
}
```

#### Avoid:

```css
/* Using tag selector */
button {
  /* Less reusable, applies to all buttons */
}
```

### 3.5 Avoid ID Selectors

- ID selectors (`#`) have high specificity and should be reserved for unique elements on a page. Avoid using them for styling purposes to prevent specificity conflicts.

#### Good:

```css
/* Using class selector */
.button {
  /* Styles for .button */
}
```

#### Bad:

```css
/* Using ID selector for styling */
#myButton {
  /* Styles for #myButton */
}
```

### 3.6 Use Attribute Selectors Sparingly

- Attribute selectors (`[attribute]`) can be useful for selecting elements based on their attributes, but use them sparingly as they can be less efficient than class or ID selectors.

#### Good:

```css
/* Using attribute selector sparingly */
input[type='text'] {
  /* Styles for text inputs */
}
```

#### Bad:

```css
/* Overusing attribute selector */
div[id^='section'] {
  /* Selects div elements with IDs starting with "section" */
}
```

### 3.7 Avoid Universal Selectors

- Universal selectors (`*`) select all elements on a page. Using them should be avoided in most cases, as they can negatively impact performance and make styles harder to maintain.

#### Avoid:

```css
/* Universal selector */
* {
  /* Applies styles to all elements */
}
```

### 3.8 Pseudo-classes and Pseudo-elements

- When using pseudo-classes (`:hover`, `:active`, etc.) and pseudo-elements (`::before`, `::after`), maintain a clear and consistent naming convention.

#### Good:

```css
/* Pseudo-class and pseudo-element with clear naming */
.button:hover {
  /* Hover state styles */
}

.button::before {
  /* Styles for a pseudo-element */
}
```

#### Bad:

```css
/* Unclear naming */
.button:hover-effect {
  /* Non-descriptive naming */
}

.button:before {
  /* Ambiguous naming */
}
```

### 3.9 Always use direct selector with className unless there is a good reason

#### Good:

```css
/* Direct selector */

.title {
  /* Styles for title with className */
}

.description {
  /* Styles for description with className */
}
```

#### Bad:

```css
/* Indirect selector */

.parent:first-child {
  /* Styles for title*/
}

.parent > div {
  /* Styles for description */
}
```

## 4. Comments

- Use comments to explain the purpose of complex styles or provide context.
- Follow a consistent commenting style (e.g., `/* Comment here */`).
- Include information about any browser-specific or hacky CSS.

Example:

```css
/* Button styles for primary actions */
.myButton {
  /* Styles here */
}
```
