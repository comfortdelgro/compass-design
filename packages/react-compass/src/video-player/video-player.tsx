import React, {SyntheticEvent, useState} from 'react'
import Slider from '../slider'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  SettingIcon,
  VolumeIcon,
} from './icon'
import {
  StyledButtonWrapper,
  StyledControllerWrapper,
  StyledSlideBarWrapper,
  StyledVideoPlayer,
  StyledVolume,
} from './video-player.styles'
import VolumeSlider from './volume-slider/volume-slider'

interface Props extends StyledComponentProps {
  src: string
  id?: string
  loop?: boolean
  autoPlay?: boolean
  muted?: boolean
  controls?: boolean
  poster?: string
  preload?: 'auto' | 'metadata' | 'none'
  width?: number
  height?: number
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string

  onNext?: () => void
  onPrev?: () => void
  onSetting?: () => void
}

export type VideoPlayerProps = Props

const VideoPlayer = React.forwardRef<HTMLVideoElement, Props>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    id,
    src,
    poster,
    width,
    height,
    preload = 'auto',
    autoPlay = false,
    loop = false,
    muted = false,
    controls = true,

    onNext,
    onPrev,
    onSetting,
  } = props

  const videoRef = useDOMRef<HTMLVideoElement>(ref)
  const [paused, setPaused] = useState(!autoPlay)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(muted ? 0 : 100)

  function play() {
    if (videoRef.current?.paused) {
      videoRef.current?.play().finally(null)
      setPaused(false)
    } else {
      videoRef.current?.pause()
      setPaused(true)
    }
  }

  function onLoadedData(e: SyntheticEvent<HTMLVideoElement>) {
    setDuration(e.currentTarget.duration ?? 0)
    e.currentTarget.volume = volume / 100
  }

  function onTimeUpdate(e: SyntheticEvent<HTMLVideoElement>) {
    const pg =
      (e.currentTarget.currentTime / e.currentTarget.duration) * 100 ?? 0
    setCurrentTime(e.currentTarget.currentTime ?? 0)
    setProgress(pg)
    if (loop === false && pg === 100) setPaused(true)
  }

  function onToggleVolume(value: number) {
    if (videoRef.current) {
      videoRef.current.volume = value / 100
      setVolume(value)
    }
  }

  function onToggleProgress(value: number) {
    if (videoRef.current) {
      videoRef.current.currentTime = (duration * value) / 100
      setProgress(value)
    }
  }
  return (
    <StyledVideoPlayer css={css} id={id}>
      <video
        src={src}
        ref={videoRef}
        loop={loop}
        poster={poster}
        preload={preload}
        muted={muted}
        controls={false}
        autoPlay={autoPlay}
        width={width}
        height={height}
        onLoadedData={onLoadedData}
        onTimeUpdate={onTimeUpdate}
        onClick={play}
      />
      {controls && (
        <>
          <StyledVolume>
            <VolumeSlider value={volume} onChange={onToggleVolume} />
            <div className='slider-bar-volume-icon'>
              <VolumeIcon value={volume} onChange={onToggleVolume} />
            </div>
          </StyledVolume>
          <StyledControllerWrapper>
            <StyledSlideBarWrapper>
              <span>{formatTime(currentTime)}</span>
              <Slider value={progress} onChange={onToggleProgress} />
              <span>{formatTime(duration)}</span>
            </StyledSlideBarWrapper>
            <StyledButtonWrapper>
              <div className='slider-bar-button-main'>
                <div className='slider-bar-button-prev' onClick={onPrev}>
                  <PrevIcon />
                </div>
                <div className='slider-bar-button-play' onClick={play}>
                  {paused ? <PlayIcon /> : <PauseIcon />}
                </div>
                <div className='slider-bar-button-next' onClick={onNext}>
                  <NextIcon />
                </div>
                <div className='slider-bar-button-setting' onClick={onSetting}>
                  <SettingIcon />
                </div>
              </div>
            </StyledButtonWrapper>
          </StyledControllerWrapper>
        </>
      )}
    </StyledVideoPlayer>
  )
})

const formatTime = (secs: number) => {
  if (secs) {
    const sec_num = parseInt(`${secs}`, 10)
    const hours = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? `0${v}` : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':')
  }
  return '0:00'
}

export default VideoPlayer
