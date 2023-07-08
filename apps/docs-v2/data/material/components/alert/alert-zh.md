---
productId: material-ui
title: React Alert （警告提示）组件
components: Alert, AlertTitle
githubLabel: 'component: alert'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/alert/
---

# Alert 警告提示

<p class="description">一个警告提示组件展示了一段简短且重要的信息，在不影响用户操作的同时能够吸引用户的注意力。</p>

**注意：** 警告提示不属于 [Material Design 指南](https://m2.material.io/) 中的一部分，但是 MUI 仍然会继续支持该组件。

{{"component": "modules/components/ComponentLinkHeader.js"}}

## 简单的警告提示

警告提示有四种不同程度的级别，每种都有自己独特的颜色和图标。

{{"demo": "BasicAlerts.js"}}

## 描述

您可以使用 `AlertTitle` 组件在内容之上展示一个格式化的标题。

{{"demo": "DescriptionAlerts.js"}}

## 行为

一个警告提示可以附带一个行为，例如一个关闭或撤销按钮。 它在消息之后，提醒结束前被渲染。

如果提供了 `onClose` 回调且没有设置 `action` 属性的话，则会呈现一个关闭图标。 这个 `action` 属性可以用来提供一个可替代的行为，例如使用一个 Button 或者 IconButton。

{{"demo": "ActionAlerts.js"}}

### 过渡效果

您可以使用诸如`Collapse`的[过渡组件](/components/transitions/)来实现警告提示出现时的过渡效果。

{{"demo": "TransitionAlerts.js"}}

## Icons 图标

使用 `icon` 属性，您可以在警告提示组件开头添加一个图标。 以此来改变不同程度的默认图标。

通过使用 `iconMapping` 属性，您可以改变不同程度的默认图标映射。 您可以使用 [自定义主题](/customization/theme-components/#default-props)进行全局设置。

把图标属性设置为 `false` 将会移除所有图标。

{{"demo": "IconAlerts.js"}}

## 变体

还有描边（outlined）和填充（filled）这两种组件的变体可以使用。

### 描边

{{"demo": "OutlinedAlerts.js"}}

当使用 [`消息条（Snackbar）`组件](/material-ui/react-snackbar/#customization)时，背景内容将默认可见并出血。 您可以为对`Alert`的[sx</code> 属性](/material-ui/customization/how-to-customize/#the-sx-prop) 添加`bgcolor: 'background.paper'`，以阻止这一行为。

### 填充

{{"demo": "FilledAlerts.js"}}

## Toast（提示）

You can use the Snackbar to [display a toast](/material-ui/react-snackbar/#customization) with the Alert.

## Color 颜色

使用 `color`属性可以覆盖不同程度提醒的默认颜色。

{{"demo": "ColorAlerts.js"}}

## 无障碍设计

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

当动态地显示组件时，大部分屏幕阅读器都会自动朗读其内容。 此时，屏幕阅读不会将页面加载时出现的警告提示通知给用户。

使用颜色来增加意义只提供了一个视觉指示，而不会向诸如屏幕阅读器的辅助技术传达。 请确保用颜色表示的信息，要么内容本身（例如一些可见的文本）是明显的，要么通过其他方法包含信息，例如一个附加的隐藏文本。

动作的选项卡索引（tab index）必须为0，这样只使用键盘的用户才能访问它们。
