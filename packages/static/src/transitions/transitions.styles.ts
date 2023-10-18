.StyledTransition {
  /* reset */
  box-sizing: border-box;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  /* custom */
  transition-duration: var(--speed);
  transition-timing-function: ease;
  overflow: hidden;
}

.StyledTransition.effect-collapse {
  overflow: hidden;
  /* height: 0px; */
  transition: var(--collapseDirection) var(--speed);
  -moz-transition: var(--collapseDirection) var(--speed); /* Firefox 4 */
  -webkit-transition: var(--collapseDirection) var(--speed); /* Safari and Chrome */
  -o-transition: var(--collapseDirection) var(--speed); /* Opera */
}

.StyledTransition.effect-fade {
  opacity: 0;
  transition: opacity var(--speed);
}

.StyledTransition.effect-slide {
  position: absolute;
  transform: var(--slideDirection);
  transition: transform var(--speed);
}

.StyledTransition.effect-zoom {
  transform: scale(0);
  transition: transform var(--speed);
}

.StyledTransition.show-true {
  /* No additional styles needed for true */
}

.StyledTransition.show-false {
  /* No additional styles needed for false */
}

.StyledTransition.orientation-horizontal {
  width: 0px;
}

.StyledTransition.orientation-vertical {
  height: 0px;
}

.StyledTransition.orientation-none {
  /* No additional styles needed for none */
}

.StyledTransition.effect-collapse.orientation-vertical.show-true {
  height: var(--collapsedSize);
}

.StyledTransition.effect-collapse.orientation-horizontal.show-true {
  width: var(--collapsedSize);
}

.StyledTransition.effect-fade.show-true {
  opacity: 1;
}

.StyledTransition.effect-grow.show-true {
  transform: scale(1);
}

.StyledTransition.effect-slide.show-true {
  transform: translateX(0);
  position: static;
}

.StyledTransition.effect-zoom.show-true {
  transform: scale(1);
}
