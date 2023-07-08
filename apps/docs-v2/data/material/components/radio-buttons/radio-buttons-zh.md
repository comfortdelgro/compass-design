---
productId: material-ui
title: React Radio buttons（单选按钮）组件
components: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel
githubLabel: 'component: radio'
materialDesign: 'https://m2.material.io/components/selection-controls#radio-buttons'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
---

# Radio 单选框组件

<p class="description">用户可以通过单选按钮从一组中选择一个选项。</p>

当用户想要看到所有的选项时，可以使用[单选按钮](/zh/material-ui/react-select/)。 如果可用的选项可以折叠，请考虑使用 [选择组件](/zh/material-ui/react-select/) ，因为它使用的空间较少。

默认情况下，单选按钮应该选择了最常用的选项。

{{"component": "modules/components/ComponentLinkHeader.js"}}

## Radio group

`RadioGroup` 适用于一组 `Radio`，它提供相对简单的 API 并且能够使用键盘对该 RadioGroup 进行控制。

{{"demo": "RadioButtonsGroup.js"}}

### 方向

要使按钮水平布局，需要将 `row` 属性设置为：

{{"demo": "RowRadioButtonsGroup.js"}}

### Controlled

You can control the radio with the `value` and `onChange` props:

{{"demo": "ControlledRadioButtonsGroup.js"}}

## Standalone radio buttons 独立的单选框按钮

`Radio` 也可以单独使用，无需额外的 RadioGroup wrapper。

{{"demo": "RadioButtons.js"}}

## Size 大小

Use the `size` prop or customize the font size of the svg icons to change the size of the radios.

{{"demo": "SizeRadioButtons.js"}}

## Color 颜色

{{"demo": "ColorRadioButtons.js"}}

## 标签放置

你可以用 `FormControlLabel` 组件的 `labelPlacement` 属性来改变标签的位置。

{{"demo": "FormControlLabelPlacement.js"}}

## 显示错误

一般来说，单选按钮应带有一个默认选中的值。 如果不是这种情况，若用户在提交表单时如果未选择任何值，您可以让其显示一个错误：

{{"demo": "ErrorRadios.js"}}

## Customized radios 自定义单选框

以下是自定义组件的一个示例。 You can learn more about this in the [overrides documentation page](/material-ui/customization/how-to-customize/).

{{"demo": "CustomizedRadios.js"}}

## `useRadioGroup`

对于需要高级定制用例的情况，您可以使用一个 `useRadioGroup()` hook。 这将会返回单选框组上下文的值。 单选框组件在其内部会使用这个 hook。

### API

```jsx
import { useRadioGroup } from '@mui/core/RadioGroup';
```

#### 返回结果

`value` (_object_):

- `value.name` (_string_ [optional])：用于引用控件值的名称。
- `value.onChange` (_func_ [optional])：选择单选按钮时触发的回调。
- `value.value` (_any_ [optional])：所被选定的单选框的值。

#### 示例

{{"demo": "UseRadioGroup.js"}}

## 什么时候使用

- [多选框 对比 单选按钮（Radio Buttons）](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

## 无障碍设计

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

- 所有表单控件都应该带有标签，而这包括了单选按钮，复选框和开关。 In most cases, this is done by using the `<label>` element ([FormControlLabel](/material-ui/api/form-control-label/)).
- 如果无法使用标签，您则必须在输入组件中直接添加属性。 在这种情况下，您可以经由 `inputProps` 属性，来附着一些额外的属性（例如 `arial-label`，`aria-labelledby`，`title`）。

```jsx
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',
  }}
/>
```
