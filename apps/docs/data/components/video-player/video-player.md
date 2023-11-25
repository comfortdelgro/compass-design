---
title: React Video Player component
components: VideoPlayer
---

# Video Player

<p class="description">Using to display a video.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {VideoPlayer, VideoPlayerProps} from '@comfortdelgro/react-compass'
```


## Example

{{"demo": "VideoPlayer.tsx"}}

## Props

### TooltipTrigger Props:

| Name      | Type                           | Default | Description                                                                                           |
| :-------- | :----------------------------- | :------ | :---------------------------------------------------------------------------------------------------- |
| src       | `string`                       | -       | Specifies the URL of the video file                                                                   |
| id        | `string`                       | -       | Unique id of the video                                                                                |
| loop      | `boolean`                      | false   | Specifies that the video will start over again, every time it is finished                             |
| autoPlay  | `boolean`                      | false   | Specifies that the video will start playing as soon as it is ready                                    |
| muted     | `boolean`                      | false   | Specifies that the audio output of the video should be muted                                          |
| controls  | `boolean`                      | true    | Specifies that video controls should be displayed (such as a play/pause button etc).                  |
| poster    | `string`                       | -       | Specifies an image to be shown while the video is downloading, or until the user hits the play button |
| preload   | `auto` \| `metadata` \| `none` | -       | Specifies if and how the author thinks the video should be loaded when the page loads                 |
| width     | `number`                       | -       | Sets the width of the video player                                                                    |
| height    | `number`                       | -       | Sets the height of the video player                                                                   |
| onNext    | `() => void`                   | -       | Fired when the next button is clicked                                                                 |
| onPrev    | `() => void`                   | -       | Fired when the prev button is clicked                                                                 |
| onSetting | `() => void`                   | -       | Fired when the settings button is clicked                                                             |
| css?      | `CSS`                          | —       | The system prop that allows defining system overrides as well as additional CSS styles.               |
