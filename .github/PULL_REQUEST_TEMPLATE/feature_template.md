# Merge request description template

## Description

**1) Changes**

<!-- Link to JIRA -->

**2) Impact**

<!-- Impact to function, screen or module -->



## Reference (optional)

<!-- Link to JIRA -->

## Check list

- [X] 1. Did you start and verify your changes?
- [X] 2. Did you run build to make sure that your changes can be built successfully?
- [X] 3. No !important flag, inline style in css
- [X] 4. No bolerplate codes (1)
- [X] 5. No duplicate code that exist in common functions?
- [X] 6. All of defined variables should have default value, check null and undefined?
- [X] 7. Use meaningful name for variables, no suffix 1,2,... Describes reference information for easier to understand what's inside. (2)
- [X] 9. Unsubscribed all of subscribers and even listeners when you don't need them.

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
