# Merge request description template

## Description

**1) Root cause**

<!-- Describe reason why -->

**2) Changes**

<!-- Link to JIRA -->

**3) Impact**

<!-- Impact to function, screen or module -->

## Reference (optional)

<!-- Link to JIRA -->

## Check list

- [x] 1. Did you start and verify your changes?
- [x] 2. Did you run build to make sure that your changes can be built successfully?
- [x] 3. No !important flag, inline style in css
- [x] 4. No boilerplate codes (1)
- [x] 5. No duplicate code that exist in common functions?
- [x] 6. All of defined variables should have default value, check null and undefined?
- [x] 7. Use meaningful name for variables, no suffix 1,2,... Describes reference information for easier to understand what's inside. (2)
- [x] 9. Unsubscribed all of subscribers and even listeners when you don't need them.

```
(1)
Boilerplate codes is duplicated multiple times a bunch of the same code. This should be a common function to reuse through your code or you can use generic class / methods or design pattern to avoid the Boilerplate codes.
```

```
(2)
Follow theo coding convention
NO acronym variable name:
WRONG: el, elm
RIGHT: element
Your code can be read as a sentence
```
